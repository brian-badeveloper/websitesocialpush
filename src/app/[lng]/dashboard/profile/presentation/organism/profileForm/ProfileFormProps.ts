import { LanguageParams } from "@/models/interfaces/LanguageProps"

export interface ProfileFormProps extends LanguageParams {}

export interface ProfileFormParams {
  first_name?: string
  last_name?: string
  email?: string
  tpId?: string | number
  phone_number?: number | string
  message?: string,
  policies?: boolean
}

export interface ErrorFormProfile {
  status: boolean
  messages: string[]
  type: 'success' | 'error' | 'info' | 'danger' | 'warning'
}