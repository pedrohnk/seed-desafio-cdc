import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { CreateAuthorService } from './create-author.service';
import { PrismaService } from '../../infraestructure/prisma.service';
import { AuthorRepository } from './author.repository';

@Module({
  controllers: [AuthorController],
  providers: [
    CreateAuthorService,
    PrismaService,
    {
      provide: 'IAuthorRepository',
      useClass: AuthorRepository,
    },
  ],
})
export class AuthorModule {}
