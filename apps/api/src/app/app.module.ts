import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
// import { PrismaModule } from './shared/prisma/prisma.module';
// import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule,
    // PrismaModule,
    // UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
