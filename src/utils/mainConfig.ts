import { ValidationError } from '@nestjs/class-validator';
import {
  INestApplication,
  PreconditionFailedException,
  ValidationPipe,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsHandler } from './AllExceptionsHandler';
import { writeFile } from 'fs/promises';

export function mainConfig(app: INestApplication) {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      enableDebugMessages: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        throw new PreconditionFailedException(validationErrors);
      },
    }),
  );

  const httpRef = app.get(HttpAdapterHost);
  app.useGlobalFilters(
    new AllExceptionsHandler(httpRef.httpAdapter.getHttpServer()),
  );

  const config = new DocumentBuilder()
    .setTitle('NestJS example')
    .setDescription('The NestJS API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build();

  const document = SwaggerModule.createDocument(app, config, {});

  if (process.env.NODE_ENV === 'dev')
    writeFile('public/swagger.json', JSON.stringify(document));
}
