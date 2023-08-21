import { Module } from '@nestjs/common';

import { CreateCategoryService } from './create-category.service';
import { CategoryController } from './category.controller';
import { PrismaService } from '../../infraestructure/prisma.service';
import { CategoryRepository } from './category.repository';

@Module({
  controllers: [CategoryController],
  providers: [
    CreateCategoryService,
    PrismaService,
    {
      provide: 'ICategoryRepository',
      useClass: CategoryRepository,
    },
  ],
})
export class CategoryModule {}
