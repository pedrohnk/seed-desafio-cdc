import { Module } from '@nestjs/common';
import { AuthorController } from './Author.controller';

@Module({
  controllers: [AuthorController],
  providers: [],
})
export class AuthorModule {}
