"use client"
import { useContext, useEffect, useState } from 'react'

import './historicView.css'

import { SiteContext } from '@/context/SiteContext'
import { Params } from '@/models/interfaces/ParamsProps'
import DashboardTemplate from '@/components/organism/dashboardTemplate/DashboardTemplate'
import { changeLanguage, getLang, validateLangUrl } from '@/helpers/language'
import { onActiveLinks, onDetectRedirect } from '@/helpers/redirectCustom'
import { headerTags, headerTagsUpdate } from '@/helpers/headerTags'
import HistoricTable from '../historicTable/HistoricTable'
import { useAuthenticate } from '@/hooks/useAuthenticate'
import { HistoricViewProps } from './HistoricViewProps'
import getLanguage, { LanguagesType } from '@/models/i18n'
import NavbarOrg from '@/components/organism/navbarOrg/NavbarOrg'
import FooterOrg from '@/components/organism/footerOrg/FooterOrg'

const HistoricView = ({ lng }: HistoricViewProps) => {
  const [lang, setLang] = useState<LanguagesType>(lng)
  const defaultLanguage = getLang()

  const changeLang = (lang: LanguagesType) => {
    setLang(lang)
    changeLanguage(lang)
  }

  const translate = getLanguage(lang)
  const { network, onDetectNetwork, getState } = useContext(SiteContext)
  const { verifyAuth } = useAuthenticate()

  const getStateLogin = getState()

  useEffect(() => {
    validateLangUrl(lng)
    onDetectNetwork()
    onDetectRedirect()
  },[])

  useEffect(() => {
    onActiveLinks()
  },[])

  useEffect(() => {
    verifyAuth()
  },[lang])

  return (
    <>
      <NavbarOrg changeLang={changeLang} lng={lang} defaultLang={defaultLanguage} />
      <DashboardTemplate lng={lang} defaultLang={defaultLanguage}>
        <>
          <div className="historic-view">
            <h2 className="historic-view__title">{translate.DASHBOARD.HISTORIC_TITLE}</h2>
            <HistoricTable lng={lang} />
          </div>
        </>
      </DashboardTemplate>
      <FooterOrg lng={lang} defaultLang={defaultLanguage} />
    </>
  )
}

export default HistoricView