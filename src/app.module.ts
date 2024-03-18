import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Author } from './entities/Author';
import config from './mikro-orm.config';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
    MikroOrmModule.forFeature({ entities: [Author] }),
    // @ts-ignore
    MikroOrmModule.forRoot(config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
