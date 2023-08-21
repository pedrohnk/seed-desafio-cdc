import { Inject, Injectable } from '@nestjs/common';

import CategoryDto, { ICategoryRepository } from './category.dto';
import { ResourceAlreadyExistError } from '../../common/errors/resource-already-exist-error';

@Injectable()
export class CreateCategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly repository: ICategoryRepository,
  ) {}

  async execute(data: CategoryDto) {
    const categoryAlreadyExists = await this.repository.findByName(data.name);
    if (categoryAlreadyExists) {
      throw new ResourceAlreadyExistError('Category already exists.');
    }
    return await this.repository.create(data);
  }
}
