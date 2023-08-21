import { Inject, Injectable } from '@nestjs/common';
import AuthorDto, { IAuthorRepository } from './author.dto';
import { ResourceAlreadyExistError } from '../../common/errors/resource-already-exist-error';

@Injectable()
export class CreateAuthorService {
  constructor(
    @Inject('IAuthorRepository') private readonly repository: IAuthorRepository,
  ) {}

  async execute(data: AuthorDto) {
    const emailAlreadyExists = await this.repository.findByEmail(data.email);
    if (emailAlreadyExists) {
      throw new ResourceAlreadyExistError('Email already exists.');
    }
    return await this.repository.create(data);
  }
}
