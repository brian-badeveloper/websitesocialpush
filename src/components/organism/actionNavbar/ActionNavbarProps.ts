import { LanguagesType } from "@/models/i18n"

export interface ActionNavbarProps {
  lng: LanguagesType
  status: boolean
  show: boolean
  onChangeStatus: () => void
  changeLang: (lang: LanguagesType) => void
  showLng?: boolean
  showArrow?: boolean
}