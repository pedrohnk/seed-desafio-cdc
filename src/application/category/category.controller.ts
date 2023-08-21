import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import CategoryDto from './category.dto';
import { CreateCategoryService } from './create-category.service';
import { ResourceAlreadyExistError } from '../../common/errors/resource-already-exist-error';

@Controller('category')
export class CategoryController {
  constructor(private readonly createCategoryService: CreateCategoryService) {}

  @Post('/create')
  public async create(@Body() data: CategoryDto) {
    try {
      return await this.createCategoryService.execute(data);
    } catch (error) {
      if (error instanceof ResourceAlreadyExistError) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
  }
}
