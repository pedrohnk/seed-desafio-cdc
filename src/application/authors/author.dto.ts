import { IsNotEmpty, IsEmail, Length } from 'class-validator';

export default class AuthorDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(0, 400)
  description: string;
}

export interface AuthorDatabaseResult {
  id: string;
  name: string;
  email: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export interface IAuthorRepository {
  create(data: AuthorDto): Promise<AuthorDto>;
  findByEmail(email: string): Promise<AuthorDatabaseResult | null>;
}
