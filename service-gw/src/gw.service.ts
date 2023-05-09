import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/orders/create-order-request.dto.js';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './dto/orders/create-order.event.js';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  // constructor(
  //   @Inject('ORDERS') private readonly communicationClient: ClientProxy,
  // ) {}

  // getHello(): string {
  //   return 'Hello World!';
  // }

  // createUser(createUserRequest: CreateUserRequest) {
  //   this.users.push(createUserRequest);
  //   this.communicationClient.emit(
  //     'user_created',
  //     new CreateUserEvent(createUserRequest.email),
  //   );
  // }
}
