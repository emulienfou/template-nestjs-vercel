import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { mainConfig } from './utils/mainConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  mainConfig(app);

  await app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
}

bootstrap();
