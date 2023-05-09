import { Controller, Get } from '@nestjs/common';
import { AppService } from './orders.service';
import { Ctx, EventPattern, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create-order')
  handleOrderCreated(@Ctx() context: RmqContext, data: any) {
    console.log('PROC');
    const channel = context.getChannelRef();
    const message = context.getMessage();
    channel.ack(message);

    return this.appService.handleOrderCreated({});
  }
}
