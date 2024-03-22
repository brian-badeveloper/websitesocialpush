import { LanguagesType } from '@/models/i18n'
import { LanguageProps } from '@/models/interfaces/LanguageProps'

export interface NavbarProps extends LanguageProps {
  changeLang: (lang: LanguagesType) => void 
}
