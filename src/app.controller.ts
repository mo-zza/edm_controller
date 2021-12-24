import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('HELLO_SERVICE')
    private readonly client: ClientProxy
    ) {}

  @Get('health_check')
  getHello() {
    const result = this.client.send('notification', 'Working app service');
    return result;
  }
}
