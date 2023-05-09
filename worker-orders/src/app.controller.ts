import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, EventPattern, RmqContext } from '@nestjs/microservices';
import { CreateUserEvent } from './create-usser.event.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern({ cmd: 'get-user' })
  handleUserCreated(@Ctx() context: RmqContext, data: CreateUserEvent) {
    // console.log('PROC222');
    // this.appService.handleUserCreated(data);
    const channel = context.getChannelRef();
    const message = context.getMessage();
    channel.ack(message);

    return { user: 'USER' };
  }
}
