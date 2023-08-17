import Author from '../src/author/Author';

describe('Author Model', () => {
  it('should be able to create a new author with correct params', () => {
    const author = Author.create(
      'any_name',
      'any_email@gmail.com',
      'an famous author',
    );
    expect(author.id).toBeDefined();
    expect(author.name).toBe('any_name');
    expect(author.email.value).toBe('any_email@gmail.com');
    expect(author.description).toBe('an famous author');
  });

  it('should not be able to create an author with invalid email', () => {
    expect(() =>
      Author.create('any_name', 'invalid_email@gmail', 'an famous author'),
    ).toThrow(new Error('Invalid email'));
  });
});
