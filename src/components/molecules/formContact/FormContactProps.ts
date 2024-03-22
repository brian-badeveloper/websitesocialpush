import { LanguagesType } from '@/models/i18n'
import { LanguageProps } from '@/models/interfaces/LanguageProps'

export interface FormContactProps extends LanguageProps {}

export interface FormContactParams {
  first_name?: string
  last_name?: string
  email?: string
  code_number?: string,
  code_country?: string,
  phone_number?: number | string
  policies?: boolean
}

export interface ErrorFormContact {
  status: boolean
  messages: string[]
  type: 'success' | 'error' | 'info' | 'danger' | 'warning'
}

export interface ContactParams {
  name: string
  email: string
  country: string
  phone: string
  code_number?: string
  ip?: string
  password?: string
}