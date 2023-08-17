import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import AuthorDto from './Author.dto';
import Author from './Author.entity';

@Controller('author')
export class AuthorController {
  @Post('/create')
  @HttpCode(201)
  async create(@Body() authorDto: AuthorDto) {
    const author = Author.create(
      authorDto.name,
      authorDto.email,
      authorDto.description,
    );
    return author;
  }
}
