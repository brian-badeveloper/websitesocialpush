import { SizeType } from '@/models/types/SizeType'

export interface InputProps {
  label?: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  name?: string
  error?: boolean
  type: 'text' | 'number' | 'email' | 'password'
  size?: SizeType
  color?: string
  background?: string
  border?: number
  borderRadius?: number
  borderColor?: string
  readonly?: boolean
}
