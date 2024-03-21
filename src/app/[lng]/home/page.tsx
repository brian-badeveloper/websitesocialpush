'use client'
import { useEffect, useState } from 'react'

// images

// components, interfaces, types and functions

import { Params, SearchParams } from '@/models/interfaces/ParamsProps'
import { changeLanguage, validateLangUrl } from '@/helpers/language'
import { onDetectRedirect } from '@/helpers/redirectCustom'
import getLanguage, { LanguagesType } from '@/models/i18n'
import { headerTags, headerTagsUpdate } from '@/helpers/headerTags'

const HomePage = ({ params: { lng } }: SearchParams) => {

  const [lang, setLang] = useState<LanguagesType>(lng)

  const changeLang = (lang: LanguagesType) => {
    setLang(lang)
    changeLanguage(lang)
  }
  
  // console.log(lng)

  const translate = getLanguage(lang)

  useEffect(() => {
    // validateLangUrl(lng)
    // onDetectRedirect()
    headerTags(
      translate.HOME.TITLE,
      translate.HOME.DESCRIPTION,
    )
  },[])

  useEffect(() => {
    headerTagsUpdate(
      translate.HOME.TITLE,
      translate.HOME.DESCRIPTION,
    )
  },[lang])
  
  return (
    <div>
     hola - {lng}
    </div>
  )
}

export default HomePage