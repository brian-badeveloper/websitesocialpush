export interface ResetPassword {
  email: string
  password: string
  password2: string
  otp: string | number
}