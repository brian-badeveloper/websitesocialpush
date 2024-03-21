import { en } from './en'
import { es } from './es'
 
const languages = {
  en,
  es
} as const

export type LanguagesType = keyof typeof languages

const getLanguage = (lang: LanguagesType) => languages[lang]
export default getLanguage
