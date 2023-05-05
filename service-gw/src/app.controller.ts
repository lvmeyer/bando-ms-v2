import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './create-user-request.dto.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() createUserRequest: CreateUserRequest) {
    console.log('PROC_11');
    return this.appService.createUser(createUserRequest);
  }
}
