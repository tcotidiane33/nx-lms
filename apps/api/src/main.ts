/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from './app/config/config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const globalPrefix = configService.apiPrefix;
  app.setGlobalPrefix(globalPrefix);

  const port = configService.port;

  const config = new DocumentBuilder()
    .setTitle('LMS API')
    .setDescription('API documentation for your LMS')
    .setVersion('1.0')
    .addBearerAuth() // Pour l'auth plus tard
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(port);

  Logger.log(
    `🚀 Application ${configService.appName} is running in ${configService.nodeEnv} mode on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
