import { IsNotEmpty, IsEmail, Length } from 'class-validator';

export default class AuthorDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Length(0, 400)
  description: string;
}
