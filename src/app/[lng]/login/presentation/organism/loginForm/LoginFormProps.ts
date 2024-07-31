import { LanguageParams } from "@/models/interfaces/LanguageProps"
import { LoginStateType } from "../loginView/LoginViewProps"

export interface LoginFormProps extends LanguageParams {
  onChangeView: (view: LoginStateType) => void
}

export interface LoginFormParams {
  username?: string
  password?: string
}

export interface ErrorLoginForm {
  status: boolean
  messages: string[]
  type: 'success' | 'error' | 'info' | 'danger' | 'warning'
}