import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infraestructure/prisma.service';
import AuthorDto, { IAuthorRepository } from './author.dto';

@Injectable()
export class AuthorRepository implements IAuthorRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: AuthorDto) {
    return await this.prisma.author.create({
      data,
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.author.findFirst({
      where: {
        email: email,
      },
    });
  }
}
