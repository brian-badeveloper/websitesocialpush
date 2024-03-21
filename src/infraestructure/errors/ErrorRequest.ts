export class ErrorRequest extends Error {
  public errors: any
  constructor (status: number, errors: any[]) {
    super(`Error in the request: status ${status}`)
    this.name = 'ErrorRequest'
    this.errors = errors
  }
}
