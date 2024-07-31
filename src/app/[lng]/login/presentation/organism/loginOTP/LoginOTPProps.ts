import { LanguageParams } from "@/models/interfaces/LanguageProps"
import { LoginStateType } from "../loginView/LoginViewProps"

export interface LoginOTPProps extends LanguageParams {
  onChangeView: (view: LoginStateType) => void
  onChangeOtp: (otp: string|number) => void
  email: string
}

export type LoginOTPParams = {
  email?: string
  code?: string
}

export interface ErrorLoginOTP {
  status: boolean
  messages: string[]
  type: 'success' | 'error' | 'info' | 'danger' | 'warning'
}