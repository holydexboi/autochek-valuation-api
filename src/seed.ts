import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Seeder } from './seeds/seeder.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seeder = app.get(Seeder);

  await seeder.seed();

  console.log('Seeding complete!');
  await app.close();
}

bootstrap();