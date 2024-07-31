'use client'

import { useContext, useEffect, useState } from 'react'

import './registerView.css'

import RegisterForm from '../registerForm/RegisterForm'
import { SiteContext } from '@/context/SiteContext'
import { changeLanguage, getLang, validateLangUrl } from '@/helpers/language'
import { useAuthenticate } from '@/hooks/useAuthenticate'
import { LanguageParams } from '@/models/interfaces/LanguageProps'
import getLanguage, { LanguagesType } from '@/models/i18n'
import { Seo } from '@/components/atoms/seo/Seo'
import NavbarOrg from '@/components/organism/navbarOrg/NavbarOrg'
import FooterOrg from '@/components/organism/footerOrg/FooterOrg'

const RegisterView = ({lng}: LanguageParams) => {

  const [lang, setLang] = useState<LanguagesType>(lng)
  const defaultLanguage = getLang()

  const changeLang = (lang: LanguagesType) => {
    setLang(lang)
    changeLanguage(lang)
  }

  const translate = getLanguage(lang)

  const { verifyAuth } = useAuthenticate()

  useEffect(() => {
    verifyAuth()
  },[lang])

  return (
    <>
      <Seo
        title={translate.REGISTER.TITLE}
        description={translate.REGISTER.DESCRIPTION}
        lang={lang}
      />
      <NavbarOrg changeLang={changeLang} lng={lang} defaultLang={defaultLanguage} />
      <section className="register-view">
        <div className="container">
          <div className="register-view__row">
            <div className="register-view__card">
              <div className="register-view__card-content">
                <h2 className="register-view__card-title register-view__card-title--mb">
                  {translate.REGISTER.BANNER_TITLE}
                </h2>
                <p className="register-view__card-paragraph">
                  {translate.REGISTER.BANNER_TEXT}
                </p>
              </div>
            </div>
            <div className="register-view__form">
              <RegisterForm lng={lang} />
            </div>
          </div>
        </div>
      </section>
      <FooterOrg lng={lang} defaultLang={defaultLanguage}/>
    </>
  )
}

export default RegisterView