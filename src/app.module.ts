import { join } from 'node:path';

import { MikroOrmModule, MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Author } from './entities/Author';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (
        configService: ConfigService,
      ): Omit<MikroOrmModuleOptions<PostgreSqlDriver>, 'contextName'> => {
        const isSsl = configService.get<boolean>('DB_SSL', true);

        return {
          driver: PostgreSqlDriver,
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT', 5432),
          user: configService.get<string>('DB_USER'),
          password: configService.get<string>('DB_PASSWORD'),
          dbName: configService.get<string>('DB_NAME'),
          driverOptions: {
            connection: { ssl: isSsl ? { rejectUnauthorized: false } : false },
          },
          entities: [Author],
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
