import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import * as Joi from 'joi';

import { AppController } from './gw.controller';
import { GwService } from './gw.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './env',
      validationSchema: Joi.object({
        RABBITMQ_URI: Joi.string().required(),
      }),
    }),
    ClientsModule.register([
      {
        name: 'ORDERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URI],
          queue: 'orders_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [GwService],
})
export class GwModule {}
