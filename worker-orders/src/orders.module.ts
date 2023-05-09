import { Module } from '@nestjs/common';
import { AppController } from './orders.controller';
import { AppService } from './orders.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
