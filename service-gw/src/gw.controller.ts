import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { GwService } from './gw.service';
import { CreateUserRequest } from './dto/orders/create-order-request.dto.js';

@Controller()
export class AppController {
  constructor(private readonly gwService: GwService) {}

  @Get()
  async createUser(@Body() createUserRequest: CreateUserRequest) {
    this.gwService.createOrder({});
  }
}
