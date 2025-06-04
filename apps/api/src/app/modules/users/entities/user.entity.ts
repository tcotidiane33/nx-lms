// src/modules/users/entities/user.entity.ts
import { UserRole as PrismaUserRole } from '@lmsrepo/prisma';

export type UserRole = PrismaUserRole;



export class UserEntity {
    id: string;
    email: string;
    name: string | null;
    role: UserRole;
    createdAt: Date;
    refreshToken?: string | null;

    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
}

export class User {
    id: string;
    email: string;
    name: string | null;
    role: UserRole;
    createdAt: Date;
    refreshToken?: string | null;

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }

}
