export interface ForgotParams {
  email: string
}

export interface ForgotPass {
  email?: string
  exp?: string
  otp?: string | number
}