import Email from '../src/person/Email';

it('should be able to validate email', function () {
  const email = new Email('any_email@gmail.com');
  expect(email).toBeTruthy();
});

it('should not be able to validate a invalid email', function () {
  const email = 'invalid_email@gmail';
  expect(() => new Email(email)).toThrow(new Error('Invalid email'));
});
