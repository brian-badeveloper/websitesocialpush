import { LanguagesType } from '@/models/i18n'
import { LanguageProps } from '@/models/interfaces/LanguageProps'
import Cookies from 'js-cookie'

const InitializeLanguage = () => {
  const lang = getLang()
  Cookies.set('lang', lang)
}

const changeLanguage = (lang: LanguagesType) => {
  Cookies.set('lang', lang)
}

const getLang = () => {
  const lng = Cookies.get('lang')
  const lang = lng && typeof lng === 'string' ? lng : "es"

  return lang as LanguagesType
}

const validateLangUrl = (lang: LanguagesType) => {
  const lng = getLang()
  const current = window.location.href + '/'
  const newUrl = current.split(`/${lang}/`).join(`/${lng}/`).slice(0, -1)
  if (current.slice(0, -1) !== newUrl) {
    return window.location.href = newUrl
  }
}

export {
  InitializeLanguage,
  changeLanguage,
  getLang,
  validateLangUrl
}