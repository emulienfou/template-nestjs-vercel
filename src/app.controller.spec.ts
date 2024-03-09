import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { INestApplication } from '@nestjs/common';
import { mainConfig } from './utils/mainConfig';
import * as request from 'supertest';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    app = module.createNestApplication();

    mainConfig(app);

    await app.init();
  }, 1_000_000);

  it('should to be defined', () => {
    expect(app).toBeDefined();
  });

  it('should send message to 573000000000', async () => {
    const resp = await request(app.getHttpServer())
      .post('/')
      .send({
        phone: '573000000000',
        message: 'Hello world',
      })
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + process.env.API_SECRET);

    expect(resp.status).toBe(201);
  }, 1_000_000);
});
