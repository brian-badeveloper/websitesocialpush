import { IconsType } from "@/components/atoms/icons/domain/models/IconsType"
import { LanguagesType } from "@/models/i18n"
import { ItemOption, ItemOptionDropdown } from "@/models/interfaces/Navbar"

export interface DropdownNavbarProps {
  title: string
  options?: ItemOptionDropdown[] | ItemOption[]
  type_sub?: boolean
  lng: LanguagesType
  defaultLang: string | LanguagesType
  orientation: 'left' | 'right'
}

