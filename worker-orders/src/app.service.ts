import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-usser.event.js';

@Injectable()
export class AppService {
  handleUserCreated(data: CreateUserEvent) {
    console.log('handlerUserCreated - COMMUNICATIONS', data);
    // TODO: Email the user...
  }
}
