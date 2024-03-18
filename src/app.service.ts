import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';

import { SendMessageDTO } from './dto/send-message.dto';
import { Author } from './entities/Author';

@Injectable()
export class AppService {
  private readonly authorRepository: EntityRepository<Author>;

  constructor(em: EntityManager) {
    this.authorRepository = em.fork().getRepository(Author);
  }

  sendMessage = (dto: SendMessageDTO) => {
    return dto;
  };

  getMessages = () => {
    return [];
  };
}
