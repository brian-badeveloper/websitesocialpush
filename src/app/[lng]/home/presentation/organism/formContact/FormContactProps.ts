import { LanguageProps } from "@/models/interfaces/LanguageProps"

export interface FormContactProps extends Omit<LanguageProps, "defaultLang"> {}

export interface FormContactParams {
  first_name?: string
  last_name?: string
  email?: string
  phone_number?: number | string
  message?: string,
  policies?: boolean
  country?: string
  code_country?: string
  ip?: string
}

export interface ErrorFormContact {
  status: boolean
  messages: string[]
  type: 'success' | 'error' | 'info' | 'danger' | 'warning'
}