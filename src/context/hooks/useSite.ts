import { useEffect, useState } from 'react'
import getLanguage, { LanguagesType } from '@/models/i18n'
import { changeLanguage, getLang} from '@/helpers/language'

const useSite = () => {

  const [language, setLanguage] = useState<LanguagesType>('es')

  const getLanguages = () => {
    return getLanguage(language)
  }

  const changeLang = (lang: LanguagesType ) => {
    setLanguage(lang)
    changeLanguage(lang)
  }

  useEffect(() => {
    setLanguage(getLang())
  },[])


  return {
    getLanguages,
    language,
    changeLang
  }
}

export default useSite