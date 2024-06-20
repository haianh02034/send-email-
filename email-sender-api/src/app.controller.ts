import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send-email')
  async sendEmail(@Body('email') email: string) {
    return this.appService.sendEmail(email);
  }
}
