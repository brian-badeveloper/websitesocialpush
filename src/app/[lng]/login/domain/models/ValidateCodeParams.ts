export interface ValidateCodeParams {
  email: string,
  otp: string | number
}

export interface CodePass {
  email?: string
  otp?: string | number
  isValid?: boolean
}