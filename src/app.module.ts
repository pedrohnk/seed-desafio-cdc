import { Module } from '@nestjs/common';
import { AuthorModule } from './application/authors/author.module';
import { CategoryModule } from './application/category/category.module';

@Module({
  imports: [AuthorModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
