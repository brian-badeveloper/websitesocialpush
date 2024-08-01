import { LanguageParams } from "@/models/interfaces/LanguageProps"

export interface MessageFormProps extends LanguageParams {}

export interface MessageFormParams {
  message?: string
  policies?: boolean
}

export interface ErrorMessageForm {
  status: boolean
  messages: string[]
  type: 'success' | 'error' | 'info' | 'danger' | 'warning'
}