import { BackgroundType } from '@/models/types/BackgroundType'
import { SizeType } from '@/models/types/SizeType'
import { IconsType } from '@/components/atoms/icons/domain/models/IconsType'

export interface LinkProps {
  children: JSX.Element | string
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename'
  bgStyle?: BackgroundType
  size?: SizeType
  textSize?: number
  redirectTo?: string
  disable?: boolean
  icon: IconsType
  iconWidth?: number
  iconHeight?: number
  iconStyle?: 'normal' | 'stroke'
}
