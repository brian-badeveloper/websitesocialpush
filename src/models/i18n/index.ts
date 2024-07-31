import { en } from './en'
import { es } from './es'
 
const languages = {
  en,
  es
} as const

export type LanguagesType = keyof typeof languages
export type LanguagesDataType = typeof languages['en']

const getLanguage = (lang: LanguagesType) => languages[lang]
export {
  getLanguage as default,
  languages
}
