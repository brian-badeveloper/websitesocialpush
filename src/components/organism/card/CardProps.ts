import { SizeType } from "@/models/types/SizeType"

export interface CardProps {
  bgStyle: 'color' | 'light'
  border?: number | undefined
  borderBg?: string
  size?: SizeType
  children: JSX.Element
  senior?: boolean
  stars?: number
}