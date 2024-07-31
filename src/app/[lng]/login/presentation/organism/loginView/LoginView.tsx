"use client"
import { MouseEvent, useContext, useEffect, useState } from 'react';

import './loginView.css'

import LoginForm from '../loginForm/LoginForm'
import LoginForgot from '../loginForgot/LoginForgot';
import { SearchParams } from '@/models/interfaces/ParamsProps';
import { changeLanguage, getLang, validateLangUrl } from '@/helpers/language';
import { useAuthenticate } from '@/hooks/useAuthenticate';
import useLoginView from './useLoginView';
import LoginOTP from '../loginOTP/LoginOTP';
import LoginPassword from '../loginPassword/LoginPassword';
import FooterOrg from '@/components/organism/footerOrg/FooterOrg';
import NavbarOrg from '@/components/organism/navbarOrg/NavbarOrg';
import getLanguage, { LanguagesType } from '@/models/i18n';
import { Seo } from '@/components/atoms/seo/Seo';
import { LanguageParams } from '@/models/interfaces/LanguageProps';

const LoginView = ({ lng }: LanguageParams) => {

  const [lang, setLang] = useState<LanguagesType>(lng)
  const defaultLanguage = getLang()

  const changeLang = (lang: LanguagesType) => {
    setLang(lang)
    changeLanguage(lang)
  }

  const translate = getLanguage(lang)

  const { view, onChangeView, email, onChangeEmail, otp, onChangeOtp } = useLoginView()
  const { verifyAuth } = useAuthenticate()

  useEffect(() => {
    verifyAuth()
  },[lang])

  return (
    <>
      <Seo
        title={translate.LOGIN.TITLE}
        description={translate.LOGIN.DESCRIPTION}
        lang={lang}
      />
      <NavbarOrg changeLang={changeLang} lng={lang} defaultLang={defaultLanguage} />
      <section className="login-view">
        <div className="container">
          <div className="login-view__row">
            <div className="login-view__card">
              <div className="login-view__card-content">
                <h2 className="login-view__card-title">{translate.LOGIN.BANNER_TITLE}</h2>
              </div>
            </div>
            <div className="login-view__form">
              {
                {
                  'Login' : (
                    <LoginForm 
                      onChangeView={onChangeView}
                      lng={lang}
                      />
                    ),
                    'Forgot' : (
                    <LoginForgot 
                      onChangeView={onChangeView} 
                      onChangeEmail={onChangeEmail}
                      lng={lang}
                      />
                    ),
                    'OTP' :  (
                    <LoginOTP 
                      onChangeView={onChangeView} 
                      onChangeOtp={onChangeOtp}
                      email={email}
                      lng={lang}
                      />
                    ),
                    'Password' : (
                      <LoginPassword 
                      email={email}
                      onChangeView={onChangeView} 
                      onChangeEmail={onChangeEmail}
                      onChangeOtp={onChangeOtp}
                      otp={otp}
                      lng={lang}
                    />
                  )
                }[view]
              }
            </div>
          </div>
        </div>
      </section>
      <FooterOrg defaultLang={defaultLanguage} lng={lang} />
    </>
  )
}

export default LoginView