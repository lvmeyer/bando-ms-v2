import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserEvent } from './create-usser.event.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('user_created')
  handleUserCreated(data: CreateUserEvent) {
    this.appService.handleUserCreated(data);
  }
}
