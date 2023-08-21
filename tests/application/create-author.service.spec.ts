import { mock, type MockProxy } from 'jest-mock-extended';

import { CreateAuthorService } from './../../src/application/authors/create-author.service';
import { IAuthorRepository } from '../../src/application/authors/author.dto';
import { ResourceAlreadyExistError } from '../../src/common/errors/resource-already-exist-error';

describe('CreateAuthorService', () => {
  const authorData = {
    name: 'any_name',
    email: 'any_email@gmail.com',
    description: 'any_description',
  };
  let authorRepository: MockProxy<IAuthorRepository>;
  let sut: CreateAuthorService;

  beforeAll(() => {
    authorRepository = mock();
    authorRepository.create.mockResolvedValue(authorData);
  });

  beforeEach(() => {
    sut = new CreateAuthorService(authorRepository);
  });

  it('should be able to create a new author', async () => {
    await sut.execute(authorData);
    expect(authorRepository.create).toHaveBeenCalledWith(authorData);
  });

  it('should throw ResourceAlreadyExistError when email already exists', async () => {
    authorRepository.findByEmail.mockResolvedValue({
      id: 'any_id',
      name: 'any_name',
      email: 'any_email@gmail.com',
      description: 'any_description',
      created_at: new Date(),
      updated_at: new Date(),
    });

    await expect(sut.execute(authorData)).rejects.toThrow(
      ResourceAlreadyExistError,
    );
  });
});
