import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorController } from './author/Author.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthorController],
  providers: [AppService],
})
export class AppModule {}
