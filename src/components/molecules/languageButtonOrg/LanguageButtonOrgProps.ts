import { LanguagesType } from "@/models/i18n";

export interface LanguageButtonOrgProps {
  language: LanguagesType
  changeLanguage: (lang:LanguagesType) => void
}