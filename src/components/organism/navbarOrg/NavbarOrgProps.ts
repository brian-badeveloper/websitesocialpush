import { LanguagesType } from '@/models/i18n'
import { LanguageProps } from '@/models/interfaces/LanguageProps'

export interface NavbarOrgProps extends LanguageProps {
  changeLang: (lang: LanguagesType) => void 
}
