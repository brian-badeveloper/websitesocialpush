import { IconsType } from "@/components/atoms/icons/domain/models/IconsType"
import { NetworkType } from "@/models/types/NetworkType"
import { ItemOption } from "../navbarOrg/domain/models/interfaces/Navbar"

export interface DropdownNavbarProps {
  iconLeft: IconsType
  title: string
  color?: string
  options: ItemOption[]
}
