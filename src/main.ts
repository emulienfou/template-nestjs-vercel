import 'dotenv/config';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { mainConfig } from './utils/mainConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const logger = new Logger(bootstrap.name);

  mainConfig(app);

  await app.listen(process.env.PORT || 3000, async () => {
    const url = await app.getUrl();
    logger.log(`Server is running in ${url}`);
  });
}

bootstrap();
