import { BackgroundType } from "@/models/types/BackgroundType"
import { SizeType } from "@/models/types/SizeType"

export interface ButtonSimpleProps {
  children: JSX.Element | string
  type?: 'button' | 'reset' | 'submit'
  bgStyle?: BackgroundType
  size?: SizeType
  textSize?: number
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  redirectTo?: string
  disable?: boolean
}
