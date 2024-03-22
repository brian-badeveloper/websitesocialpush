import { SizeType } from '@/models/types/SizeType'
import { Country } from './domain/models/interfaces/Countries'

export interface InputPhoneProps extends InputPhoneAction {
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
  borderAddon?: number
  borderAddonColor?: string
  readonly?: boolean
}

export interface InputPhoneAction {
  onSelectCountry: (prefix: string, code: string) => void
  country: Country
  countryState: Country
}