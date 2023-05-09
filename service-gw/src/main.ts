import { NestFactory } from '@nestjs/core';
import { GwModule } from './gw.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(GwModule);
  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
}
bootstrap();
