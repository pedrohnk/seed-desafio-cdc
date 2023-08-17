import { randomUUID } from 'crypto';

import Email from '../person/Email';

export default class Author {
  readonly email: Email;

  constructor(
    readonly id: string,
    readonly name: string,
    email: string,
    readonly description: string,
    readonly created_at: string,
  ) {
    this.email = new Email(email);
  }

  static create(name: string, email: string, description: string): Author {
    const authorId = randomUUID();
    const timestamp = new Date().toISOString();
    return new Author(authorId, name, email, description, timestamp);
  }
}
