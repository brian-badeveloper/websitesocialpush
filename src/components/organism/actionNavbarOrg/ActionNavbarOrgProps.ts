import { LanguagesType } from "@/models/i18n"
import { LanguageProps } from "@/models/interfaces/LanguageProps"

export interface ActionNavbarOrgProps extends LanguageProps {
  loginLink: string
  cartNumer: number
  cartLink: string
  status: boolean
  show: boolean
  onChangeStatus: () => void
  changeLang: (lang: LanguagesType) => void
}