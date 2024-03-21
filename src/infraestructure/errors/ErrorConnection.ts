export class ErrorConnection extends Error {
  public errors: any
  constructor (errors: any) {
    super(`Error connection refused`)
    this.name = 'ErrorConnRefused'
    this.errors = errors
  }
}
