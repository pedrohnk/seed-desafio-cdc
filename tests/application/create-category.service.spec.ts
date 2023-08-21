import { mock, type MockProxy } from 'jest-mock-extended';

import { ICategoryRepository } from '../../src/application/category/category.dto';
import { CreateCategoryService } from '../../src/application/category/create-category.service';
import { ResourceAlreadyExistError } from '../../src/common/errors/resource-already-exist-error';

describe('CreateCategoryService', () => {
  const categoryData = { name: 'any_name' };
  let categoryRepository: MockProxy<ICategoryRepository>;
  let sut: CreateCategoryService;

  beforeAll(() => {
    categoryRepository = mock();
    categoryRepository.create.mockResolvedValue(categoryData);
  });

  beforeEach(() => {
    sut = new CreateCategoryService(categoryRepository);
  });

  it('should be able to create a new category', async () => {
    await sut.execute(categoryData);
    expect(categoryRepository.create).toHaveBeenCalledWith(categoryData);
  });

  it('should throw if category already exists', async () => {
    categoryRepository.findByName.mockResolvedValue(
      new ResourceAlreadyExistError('Category already exists.'),
    );

    await expect(sut.execute(categoryData)).rejects.toThrow(
      ResourceAlreadyExistError,
    );
  });
});
