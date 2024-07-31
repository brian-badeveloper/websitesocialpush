import { IconsType } from '@/components/atoms/icons/domain/models/IconsType'
import { NetworkType } from '@/models/types/NetworkType'

export interface ItemMenuNavbarProps {
  icon: IconsType
  text: string
  redirectTo: string
  network: NetworkType
  type: 'followers' | 'likes' | 'plans'
}
