import { defineConfig } from '@mikro-orm/postgresql';
import { Logger } from '@nestjs/common';
import { Author } from './entities/Author';

const logger = new Logger('MikroORM');

export default defineConfig({
  entities: [Author],
  dbName: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  debug: true,
  logger: logger.log.bind(logger),
  driverOptions: { connection: { ssl: { rejectUnauthorized: false } } },
});
