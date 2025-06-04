// src/modules/users/mappers/user.mapper.ts
import { User as PrismaUser } from '../../../../generated/prisma';
import { UserEntity, UserRole } from '../entities/user.entity';

export class UserMapper {
  static toDomain(prismaUser: PrismaUser): UserEntity {
    return new UserEntity({
      id: prismaUser.id,
      email: prismaUser.email,
      name: prismaUser.name,
      role: prismaUser.role as UserRole,
      createdAt: prismaUser.createdAt,
      refreshToken: prismaUser.refreshToken
    });
  }

  static toPersistence(user: UserEntity): PrismaUser {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
      refreshToken: user.refreshToken || null
    };
  }
}