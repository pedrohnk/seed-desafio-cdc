import { IsNotEmpty } from 'class-validator';

export default class CategoryDto {
  @IsNotEmpty()
  name: string;
}

export interface ICategoryRepository {
  create(data: CategoryDto): Promise<CategoryDto>;
  findByName(name: string): Promise<CategoryDto | null>;
}
