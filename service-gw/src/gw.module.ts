import { Module } from '@nestjs/common';
import { AppController } from './gw.controller';
import { AppService } from './gw.service';
import {
  ClientProxyFactory,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './env',
    }),
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://user:password@localhost:5672'],
          queue: 'auth_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: 'AUTH_SERVICE',
    //   useFactory: (configService: ConfigService) => {
    //     return ClientProxyFactory.create({
    //       transport: Transport.RMQ,
    //       options: {
    //         urls: ['amqp://user:password@localhost:5672'],
    //         noAck: false,
    //         queue: 'auth_queue',
    //         queueOptions: {
    //           durable: false,
    //         },
    //       },
    //     });
    //   },
    //   inject: [ConfigService],
    // },
  ],
})
export class AppModule {}
