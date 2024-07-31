"use client"
import { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import { SiteContext } from '@/context/SiteContext'
import { changeLanguage, getLang, validateLangUrl } from '@/helpers/language'
import { onActiveLinks, onDetectRedirect } from '@/helpers/redirectCustom'
import DashboardTemplate from '@/components/organism/dashboardTemplate/DashboardTemplate'
const HeaderDashboard  = dynamic(() => import('./presentation/organism/headerDashboard/HeaderDashboard'), { ssr: false })
import NetworksDashboard from './presentation/organism/networksDashboard/NetworksDashboard'
import PackagesDashboard from './presentation/organism/packagesDashboard/PackagesDashboard'
import { Plan } from '@/models/interfaces/Plan'
import { fullNameUser } from '@/helpers/nameUser'
import { useAuthenticate } from '@/hooks/useAuthenticate'
import getLanguage, { LanguagesType } from '@/models/i18n'
import { LanguageParams } from '@/models/interfaces/LanguageProps'
import NavbarOrg from '@/components/organism/navbarOrg/NavbarOrg'
import FooterOrg from '@/components/organism/footerOrg/FooterOrg'
import { Seo } from '@/components/atoms/seo/Seo'

const HomePage = ({ lng }: LanguageParams) => {

  const [lang, setLang] = useState<LanguagesType>(lng)
  const defaultLanguage = getLang()

  const changeLang = (lang: LanguagesType) => {
    setLang(lang)
    changeLanguage(lang)
  }

  const translate = getLanguage(lang)
  const { network, onDetectNetwork, getInitPlansSold, getPlansSold, getState } = useContext(SiteContext)
  const { verifyAuth } = useAuthenticate()

  const getStateLogin = getState()
  const plans:Plan[] = getPlansSold() as Plan[]

  useEffect(() => {
    validateLangUrl(lng)
    onDetectNetwork()
    onDetectRedirect()
  },[])

  useEffect(() => {
    getInitPlansSold()
    onActiveLinks()
  },[])

  useEffect(() => {
    verifyAuth()
  },[lang])
  
  return (
    <>
      <Seo
        title={translate.DASHBOARD.HOME_TITLE}
        description={translate.DASHBOARD.HOME_DESCRIPTION}
        lang={lang}
      />
      <NavbarOrg changeLang={changeLang} lng={lang} defaultLang={defaultLanguage} />
      <DashboardTemplate lng={lang} defaultLang={defaultLanguage}>
        <>
          <HeaderDashboard
            title={`${translate.DASHBOARD.HOME_GREETING}, ${fullNameUser({full_name: getStateLogin.user?.name})}!!!`}
            paragraph={translate.DASHBOARD.HOME_TEXT_BANNER}
            language={lang}
          />
          <NetworksDashboard 
            title={translate.DASHBOARD.HOME_TITLE_NETWORKS} 
          />
          <PackagesDashboard
            title={translate.DASHBOARD.HOME_TITLE_PLANS}
            dataCards={plans}
            lng={lang}
          />
        </>
      </DashboardTemplate>
      <FooterOrg lng={lang} defaultLang={defaultLanguage} />
    </>
  )
}

export default HomePage
