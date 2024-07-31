import { IconsType } from "@/components/atoms/icons/domain/models/IconsType"
import { SizeType } from "@/models/types/SizeType"

export interface NetworkItemDashboardProps {
  icon: IconsType
  text: string
  size?: SizeType
  active?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}