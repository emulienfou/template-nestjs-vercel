import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthorizationGuard } from './authorization/authorization.guard';
import { SendMessageDTO } from './dto/send-message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UseGuards(AuthorizationGuard)
  sendMessage(@Body() dto: SendMessageDTO) {
    return this.appService.sendMessage(dto);
  }

  @Get()
  getMessage(){
    return this.appService.getMessages();
  }
}
