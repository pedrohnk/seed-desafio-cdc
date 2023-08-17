import { randomUUID } from 'crypto';

export default class Author {
  readonly id: string;
  readonly created_at: string;

  constructor(
    readonly name: string,
    readonly email: string,
    readonly description: string,
  ) {
    this.id = randomUUID();
    this.created_at = new Date().toISOString();
  }

  static create(name: string, email: string, description: string): Author {
    return new Author(name, email, description);
  }
}
