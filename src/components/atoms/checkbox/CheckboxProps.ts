export interface CheckboxProps {
  label?: JSX.Element | string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  checked: boolean
  error?: boolean
  size: number
  color: string
  colorActive: string
  colorText?: string
  redirectTo?: string
}
