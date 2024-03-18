import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';

import { SendMessageDTO } from './dto/send-message.dto';
import { Author } from './entities/Author';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: EntityRepository<Author>,
  ) {
  }

  sendMessage = (dto: SendMessageDTO) => {
    return dto;
  };

  getMessages = () => {
    return [];
  };
}
