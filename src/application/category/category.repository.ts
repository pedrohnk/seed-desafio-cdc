import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infraestructure/prisma.service';
import CategoryDto, { ICategoryRepository } from './category.dto';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CategoryDto) {
    return await this.prisma.categories.create({
      data,
    });
  }

  async findByName(name: string): Promise<CategoryDto | null> {
    return await this.prisma.categories.findFirst({
      where: {
        name: name,
      },
    });
  }
}
