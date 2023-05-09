import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/orders/create-order-request.dto.js';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './dto/orders/create-order.event.js';

@Injectable()
export class GwService {
  private readonly users: any[] = [];

  constructor(@Inject('ORDERS_SERVICE') private orderService: ClientProxy) {}

  createOrder(data: any) {
    this.orderService.emit('create-order', data);
  }
  // createUser(createUserRequest: CreateUserRequest) {
  //   this.users.push(createUserRequest);
  //   this.communicationClient.emit(
  //     'user_created',
  //     new CreateUserEvent(createUserRequest.email),
  //   );
  // }
}
