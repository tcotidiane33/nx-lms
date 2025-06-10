import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private nestConfigService: NestConfigService) {}

  get databaseUrl(): string {
    return this.nestConfigService.get<string>('DATABASE_URL', '');
  }

  get port(): number {
    return Number(this.nestConfigService.get<number>('PORT', 3333));
  }

  get apiPrefix(): string {
    return this.nestConfigService.get<string>('API_PREFIX', 'api');
  }

  get appName(): string {
    return this.nestConfigService.get<string>('APP_NAME', 'LMS API KONDRONETWORKS');
  }

  get nodeEnv(): string {
    return this.nestConfigService.get<string>('NODE_ENV', 'development');
  }

  get jwtAccessSecret(): string {
    return this.nestConfigService.get<string>('JWT_ACCESS_SECRET', 'supersecret');
  }

  get jwtRefreshSecret(): string {
    return this.nestConfigService.get<string>('JWT_REFRESH_SECRET', 'supersecret');
  }

  get jwtAccessExpiration(): string {
    return this.nestConfigService.get<string>('JWT_ACCESS_EXPIRATION', '15m');
  }

  get jwtRefreshExpiration(): string {
    return this.nestConfigService.get<string>('JWT_REFRESH_EXPIRATION', '7d');
  }

  get reactAppApiUrl(): string {
    return this.nestConfigService.get<string>('REACT_APP_API_URL', 'http://localhost:3333/api');
  }

  // CISCOS

}
