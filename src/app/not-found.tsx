'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import styles from './notFound.module.css'

// images

import logo from '@/assets/images/logo.png'

// components, interfaces, types and functions

import { changeLanguage, getLang, InitializeLanguage, validateLangUrl } from '@/helpers/language'
import { onActiveLinks, onDetectRedirect } from '@/helpers/redirectCustom'
import getLanguage, { LanguagesType } from '@/models/i18n'
import { Seo } from '@/components/atoms/seo/Seo'

const HomePage = () => {

  const [lang, setLang] = useState<LanguagesType>(getLang())

  const changeLang = (lang: LanguagesType) => {
    setLang(lang)
    changeLanguage(lang)
  }

  const translate = getLanguage(lang)
  
  return (
    <>
      <Seo
        title={translate.NOTFOUND.TITLE}
        description={translate.NOTFOUND.DESCRIPTION}
        lang={lang}
      />
      <section className={styles.not_found}>
        <Image src={logo} alt="" className={styles.not_found__logo} />
        <h1 className={styles.not_found__title}>{translate.NOTFOUND.TITLE}</h1>
        <p className={styles.not_found__description}>
          {translate.NOTFOUND.DESCRIPTION}
          <a href={`/${lang}`} className={styles.not_found__link}>{translate.NOTFOUND.LINK}</a>
        </p>
      </section>
    </>
  )
}

export default HomePage