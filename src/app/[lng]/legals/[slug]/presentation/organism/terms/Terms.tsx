'use client'
import { useContext, useEffect, useState } from 'react'

import './terms.css'

import { changeLanguage, getLang, validateLangUrl } from '@/helpers/language'
import { useAuthenticate } from '@/hooks/useAuthenticate'
import { LanguageParams } from '@/models/interfaces/LanguageProps'
import getLanguage, { LanguagesType } from '@/models/i18n'
import NavbarOrg from '@/components/organism/navbarOrg/NavbarOrg'
import FooterOrg from '@/components/organism/footerOrg/FooterOrg'
import { onActiveLinks, onDetectRedirect } from '@/helpers/redirectCustom'
import { Seo } from '@/components/atoms/seo/Seo'

const Terms = ({lng}: LanguageParams) => {

  const [lang, setLang] = useState<LanguagesType>(lng)
  const defaultLanguage = getLang()

  const changeLang = (lang: LanguagesType) => {
    setLang(lang)
    changeLanguage(lang)
  }

  const translate = getLanguage(lang)
  const { verifyAuth } = useAuthenticate()

  useEffect(() => {
    onActiveLinks()
    onDetectRedirect()
  },[])

  useEffect(() => {
    verifyAuth()
  },[lang])

  return (
    <>
      <Seo
        title={translate.TERMS.TITLE}
        description={translate.TERMS.DESCRIPTION}
        lang={lang}
      />
      <NavbarOrg changeLang={changeLang} lng={lang} defaultLang={defaultLanguage} />
      <section className="terms">
        <div className="container" dangerouslySetInnerHTML={{ __html: translate.TERMS.BODY }}></div>
      </section>
      <FooterOrg lng={lang} defaultLang={defaultLanguage} />
    </>
  )
}

export default Terms