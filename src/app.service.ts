import { Injectable } from '@nestjs/common';
import { SendMessageDTO } from './dto/send-message.dto';

@Injectable()
export class AppService {
  sendMessage(dto: SendMessageDTO) {
    return dto;
  }

  getMessages() {
    return [];
  }
}
