/* eslint-disable @nx/enforce-module-boundaries */

import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { User } from '../../../../../../generated/prisma';
import { LoginResponseDto } from './dto/login-response.dto';
import { RegisterDto } from './dto/register.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly SALT_ROUNDS = 12;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<Omit<User, 'password'>> {
    const user = await this.prisma.user.findUnique({ 
      where: { email },
      include: { role: true } // Si vous avez une relation avec les rôles
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password: _, ...result } = user;
    return result;
  }

  async login(user: Omit<User, 'password'>): Promise<LoginResponseDto> {
    const payload = { 
      sub: user.id, 
      email: user.email, 
      role: user.role?.name || 'user' 
    };

    return {
      access_token: this.generateAccessToken(payload),
      refresh_token: await this.generateRefreshToken(user.id),
      user,
    };
  }

  async register(registerDto: RegisterDto): Promise<LoginResponseDto> {
    try {
      const hashedPassword = await bcrypt.hash(registerDto.password, this.SALT_ROUNDS);

      const user = await this.prisma.user.create({
        data: {
          email: registerDto.email,
          password: hashedPassword,
          name: registerDto.name,
          role: { connect: { name: 'user' } }, // Rôle par défaut
        },
        include: { role: true },
      });

      const { password: _, ...result } = user;

      return this.login(result);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email already exists');
      }
      throw new InternalServerErrorException('Registration failed');
    }
  }

  private generateAccessToken(payload: any): string {
    return this.jwtService.sign(payload, {
      expiresIn: this.configService.get<string>('JWT_ACCESS_EXPIRATION') || '15m',
      secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
    });
  }

  private async generateRefreshToken(userId: string): Promise<string> {
    const refreshToken = this.jwtService.sign(
      { sub: userId },
      {
        expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRATION') || '7d',
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      },
    );

    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken },
    });

    return refreshToken;
  }

  async refreshAccessToken(refreshToken: string): Promise<{ access_token: string }> {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub, refreshToken },
      });

      if (!user) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      return {
        access_token: this.generateAccessToken({
          sub: user.id,
          email: user.email,
          role: user.role,
        }),
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async invalidateRefreshToken(userId: string): Promise<void> {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }
}