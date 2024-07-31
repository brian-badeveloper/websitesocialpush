import { IconsType } from "@/components/atoms/icons/domain/models/IconsType"

export interface ActionDropdownProps {
  icon?: IconsType
  text?: string
  onlyIconResponsive?: boolean
  items?: ActionDropdownItems[]
}

export interface ActionDropdownItems {
  icon?: IconsType
  text?: string
  redirectTo?: string
  action?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}