import { Injectable } from '@nestjs/common';
import { SendMessageDTO } from './dto/send-message.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseCollection, MongooseDocument } from './entity/mongoose.entity';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(MongooseCollection.name)
    private readonly model: Model<MongooseDocument>,
  ) {}

  sendMessage(dto: SendMessageDTO) {
    return dto;
  }

  getMessages() {
    return [];
  }
}
