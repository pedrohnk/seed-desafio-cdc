import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import AuthorDto from './author.dto';
import { CreateAuthorService } from './create-author.service';
import { ResourceAlreadyExistError } from '../../common/errors/resource-already-exist-error';

@Controller('author')
export class AuthorController {
  constructor(private readonly createAuthorService: CreateAuthorService) {}

  @Post('/create')
  async create(@Body() data: AuthorDto) {
    try {
      return await this.createAuthorService.execute(data);
    } catch (error) {
      if (error instanceof ResourceAlreadyExistError) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
  }
}
