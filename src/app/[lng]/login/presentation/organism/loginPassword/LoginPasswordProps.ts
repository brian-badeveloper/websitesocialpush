import { LanguageParams } from "@/models/interfaces/LanguageProps"
import { LoginStateType } from "../loginView/LoginViewProps"

export interface LoginPasswordProps extends LanguageParams {
  email: string
  onChangeView: (view: LoginStateType) => void
  onChangeEmail: (email: string) => void
  onChangeOtp: (otp: string|number) => void
  otp: string | number
}

export type LoginPasswordParams = {
  password?: string
  password2?: string
}

export interface useLoginPasswordProps extends LanguageParams {
  initialForm: LoginPasswordParams
  email: string
  onChangeView: (view: LoginStateType) => void
  onChangeEmail: (email: string) => void
  onChangeOtp: (otp: string|number) => void
  otp: string | number
}

export interface ErrorLoginPassword {
  status: boolean
  messages: string[]
  type: 'success' | 'error' | 'info' | 'danger' | 'warning'
}