'use client'
import { useEffect, useState } from 'react'

// images

// components, interfaces, types and functions

import { SearchParams } from '@/models/interfaces/ParamsProps'
import { changeLanguage, getLang, InitializeLanguage, validateLangUrl } from '@/helpers/language'
import { onActiveLinks, onDetectRedirect } from '@/helpers/redirectCustom'
import getLanguage, { LanguagesType } from '@/models/i18n'
import { Seo } from '@/components/atoms/seo/Seo'
import Navbar from '@/components/organism/navbar/Navbar'
import ContactUs from '@/components/organism/contactUs/ContactUs'
import Footer from '@/components/organism/footer/Footer'

const HomePage = ({ params: { lng } }: SearchParams) => {

  const [lang, setLang] = useState<LanguagesType>(lng)
  const defaultLanguage = getLang()

  const changeLang = (lang: LanguagesType) => {
    setLang(lang)
    changeLanguage(lang)
  }

  const translate = getLanguage(lang)

  useEffect(() => {
    onActiveLinks()
    onDetectRedirect()
  },[])

  
  return (
    <>
      <Seo
        title={translate.HOME.TITLE}
        description={translate.HOME.DESCRIPTION}
        lang={lang}
      />
     <Navbar changeLang={changeLang} lng={lang} defaultLang={defaultLanguage} />
      <ContactUs lng={lang} defaultLang={defaultLanguage}/>
      <Footer lng={lang} defaultLang={defaultLanguage} />
    </>
  )
}

export default HomePage