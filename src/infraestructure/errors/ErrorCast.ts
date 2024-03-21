export class ErrorCast extends Error {
  public errors: any
  constructor (errors: any) {
    super(`Error cast data`)
    this.name = 'ErrorCast'
    this.errors = errors
  }
}
