import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { SendMessageDTO } from './dto/send-message.dto';
import { Author } from './entities/Author';

@Injectable()
export class AppService {
  protected readonly authorRepository: EntityRepository<Author>;

  constructor(em: EntityManager) {
    this.authorRepository = em.getRepository(Author);
    console.log(this.authorRepository);
  }

  sendMessage = (dto: SendMessageDTO) => {
    return dto;
  };

  getMessages = () => {
    return [];
  };
}
