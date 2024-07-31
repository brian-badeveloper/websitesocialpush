import { IconsType } from "@/components/atoms/icons/domain/models/IconsType"
import { BackgroundType } from "@/models/types/BackgroundType"
import { SizeType } from "@/models/types/SizeType"

export interface ProfileImageProps {
  icon: IconsType
  bgStyle?: BackgroundType
  size?: SizeType
  border?: number
  borderRadius?: number
  borderColor?: string
}