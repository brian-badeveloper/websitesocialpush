import { LanguagesType } from "@/models/i18n";

export interface LanguageButtonProps {
  language: LanguagesType
  changeLanguage: (lang:LanguagesType) => void
  showLng?: boolean,
  showArrow?: boolean
  color?: string
}