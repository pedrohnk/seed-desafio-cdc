export class ResourceAlreadyExistError extends Error {
  constructor(message: string) {
    super(message);
  }
}
