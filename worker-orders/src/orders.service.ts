import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './dto/create-order.event.js';

@Injectable()
export class AppService {
  // handleOrderCreated(data: CreateUserEvent) {
  handleOrderCreated(data: any) {
    console.log('handlerUserCreated - COMMUNICATIONS', data);
    // TODO: Email the user...
    return { oder: 'ORDER', message: 'order created' };
  }
}
