'use client'
import { useContext, useEffect, useState } from 'react'

import './cartView.css'

import CartBar from '../cartBar/CartBar'
import CartTable from '../cartTable/CartTable'
import { changeLanguage, getLang,  } from '@/helpers/language'
import { useAuthenticate } from '@/hooks/useAuthenticate'
import { LanguageParams } from '@/models/interfaces/LanguageProps'
import getLanguage, { LanguagesType } from '@/models/i18n'
import NavbarOrg from '@/components/organism/navbarOrg/NavbarOrg'
import FooterOrg from '@/components/organism/footerOrg/FooterOrg'
import { Seo } from '@/components/atoms/seo/Seo'

const CartView = ({lng}: LanguageParams) => {

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
        title={translate.CART.TITLE}
        description={translate.CART.DESCRIPTION}
        lang={lang}
      />
      <NavbarOrg changeLang={changeLang} lng={lang} defaultLang={defaultLanguage} />
      <section className="cart-view">
        <div className="container">
          <div className="row cart-view__row">
            <div className="cart-view__table">
              <CartTable lng={lang} />
            </div>
            <div className="cart-view__bar">
              <CartBar lng={lang} />
            </div>
          </div>
        </div>
      </section>
      <FooterOrg lng={lang} defaultLang={defaultLanguage} />   
    </>
  )
}

export default CartView