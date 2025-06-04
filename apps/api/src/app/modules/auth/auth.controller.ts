import { Body, Controller, Post, Get, Req, UseGuards, Res, HttpCode, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOkResponse, ApiOperation, ApiBearerAuth, ApiUnauthorizedResponse, ApiConflictResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import type { Request, Response } from 'express';
import { User } from '../users/entities/user.entity';
import { LoginResponseDto } from './dto/login-response.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: LoginDto })
  @ApiOkResponse({ 
    description: 'User successfully logged in', 
    type: LoginResponseDto 
  })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  async login(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    if (!req.user) {
      throw new UnauthorizedException('User not found');
    }
    const result = await this.authService.login(req.user);
    
    // Set secure HTTP-only cookie
    res.cookie('access_token', result.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000 // 1 hour
    });
    
    return result;
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'User registration' })
  @ApiBody({ type: RegisterDto })
  @ApiCreatedResponse({ 
    description: 'User successfully registered',
    type: LoginResponseDto 
  })
  @ApiConflictResponse({ description: 'Email already exists' })
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'User logout' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Successfully logged out' })
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('access_token');
    return { message: 'Logout successful' };
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiOkResponse({ description: 'Returns current user', type: User })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  async getProfile(@Req() req: Request) {
    return req.user;
  }
}