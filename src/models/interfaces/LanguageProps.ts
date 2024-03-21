import { LanguagesType } from '@/models/i18n';

export interface LanguageProps {
  lng: LanguagesType
  defaultLang?: string | LanguagesType
}
