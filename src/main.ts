import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const origins = process.env.ALLOWED_ORIGINS?.split(',') || [];

  app.enableCors({
    origin: origins.length > 0 ? origins : '*',
    credentials: true,
  });

  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
