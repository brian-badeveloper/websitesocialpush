import { SizeType } from '@/models/types/SizeType'

export interface SelectProps {
  label?: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value?: string | number
  name?: string
  error?: boolean
  size?: SizeType
  color?: string
  background?: string
  border?: number
  borderRadius?: number
  borderColor?: string
  options?: SelectOptions[]
}

export interface SelectOptions {
  name?: string | number
  value?: string | number
}
