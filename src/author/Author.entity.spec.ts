import Author from './Author.entity';

describe('Author Model', () => {
  it('should be able to create a new author with correct params', () => {
    const author = Author.create(
      'any_name',
      'any_email@gmail.com',
      'an famous author',
    );
    expect(author.id).toBeDefined();
    expect(author.name).toBe('any_name');
    expect(author.email).toBe('any_email@gmail.com');
    expect(author.description).toBe('an famous author');
  });
});
