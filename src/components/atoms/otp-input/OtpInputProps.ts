import { Params } from '@/models/interfaces/ParamsProps'

export interface OtpInputProps extends Params {
  value?: string
  onChange: (otp: string) => void
  numInputs: number
  type: "text" | "number"
  text?: string
}
