import { SizeType } from '@/models/types/SizeType'
import { ChangeEvent } from 'react'

export interface InputPasswordProps {
  label?: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  name?: string
  error?: boolean
  size?: SizeType
  color?: string
  background?: string
  border?: number
  borderRadius?: number
  borderColor?: string
  readonly?: boolean
}
