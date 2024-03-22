import { SizeType } from '@/models/types/SizeType'

export interface TextareaProps {
  label?: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string | number
  name?: string
  error?: boolean
  size?: SizeType
  color?: string
  background?: string
  border?: number
  borderRadius?: number
  borderColor?: string
}
