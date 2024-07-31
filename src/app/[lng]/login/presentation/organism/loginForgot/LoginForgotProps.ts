import { LanguageParams } from "@/models/interfaces/LanguageProps"
import { LoginStateType } from "../loginView/LoginViewProps"

export interface LoginForgotProps extends LanguageParams {
  onChangeView: (view: LoginStateType) => void
  onChangeEmail: (email: string) => void
}

export type LoginForgotParams = {
  email?: string
}

export interface useLoginForgotProps extends LanguageParams {
  initialForm: LoginForgotParams
  onChangeEmail: (email: string) => void
  onChangeView: (view: LoginStateType) => void
}

export interface ErrorLoginForgot {
  status: boolean
  messages: string[]
  type: 'success' | 'error' | 'info' | 'danger' | 'warning'
}