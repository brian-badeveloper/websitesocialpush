'use client'
import { useContext, useEffect, useState } from 'react'

import './policies.css'

import { useAuthenticate } from '@/hooks/useAuthenticate'
import { LanguageParams } from '@/models/interfaces/LanguageProps'
import { changeLanguage, getLang } from '@/helpers/language'
import getLanguage, { LanguagesType } from '@/models/i18n'
import NavbarOrg from '@/components/organism/navbarOrg/NavbarOrg'
import FooterOrg from '@/components/organism/footerOrg/FooterOrg'
import { onActiveLinks, onDetectRedirect } from '@/helpers/redirectCustom'
import { Seo } from '@/components/atoms/seo/Seo'

const Policies = ({lng}: LanguageParams) => {

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
        title={translate.POLICIES.TITLE}
        description={translate.POLICIES.DESCRIPTION}
        lang={lang}
      />
      <NavbarOrg changeLang={changeLang} lng={lang} defaultLang={defaultLanguage} />
      <section className="policies">
        <div className="container" dangerouslySetInnerHTML={{ __html: translate.POLICIES.BODY }}></div>
      </section>
      <FooterOrg lng={lang} defaultLang={defaultLanguage} />
    </>
  )
}

export default Policies