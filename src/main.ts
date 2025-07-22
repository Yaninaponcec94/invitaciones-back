import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Permitir CORS solo desde tu frontend en Vercel
  app.enableCors({
    origin: ['https://invitaciones-sage.vercel.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Escuchar en el puerto correcto (para Render)
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
