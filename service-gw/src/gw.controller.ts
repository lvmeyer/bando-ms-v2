import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './gw.service';
import { CreateUserRequest } from './dto/orders/create-order-request.dto.js';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private authService: ClientProxy,
    private readonly appService: AppService,
  ) {}

  @Get()
  async createUser(@Body() createUserRequest: CreateUserRequest) {
    return this.authService.send({ cmd: 'get-user' }, {});
    // console.log('PROC_11');
    // return this.appService.createUser(createUserRequest);
  }
}
