import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SendMessageDTO } from './dto/send-message.dto';
import { AuthorizationGuard } from './authorization/authorization.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMessages() {
    return this.appService.getMessages();
  }

  @Post()
  @UseGuards(AuthorizationGuard)
  sendMessage(@Body() dto: SendMessageDTO) {
    return this.appService.sendMessage(dto);
  }
}
