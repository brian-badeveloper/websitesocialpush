import { LanguageParams } from "@/models/interfaces/LanguageProps"

export interface RegisterFormParams {
  first_name?: string
  last_name?: string
  email?: string
  country?: string
  code_country?: string
  ip?: string
  phone_number?: string
  password?: string
  password_confirm?: string
  policies?: boolean
}

export interface RegisterFormProps extends LanguageParams {}

export interface ErrorRegisterForm {
  status: boolean
  messages: string[]
  type: 'success' | 'error' | 'info' | 'danger' | 'warning'
}