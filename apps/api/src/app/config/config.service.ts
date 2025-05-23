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
    return this.nestConfigService.get<string>('APP_NAME', 'LMS API');
  }

  get nodeEnv(): string {
    return this.nestConfigService.get<string>('NODE_ENV', 'development');
  }

  // Ajoute d'autres getters selon tes besoins
}
