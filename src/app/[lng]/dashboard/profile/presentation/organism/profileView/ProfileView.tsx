"use client"
import { useContext, useEffect, useState } from 'react'

import './profileView.css'

import { SiteContext } from '@/context/SiteContext'
import DashboardTemplate from '@/components/organism/dashboardTemplate/DashboardTemplate'
import { changeLanguage, getLang, validateLangUrl } from '@/helpers/language'
import { onActiveLinks, onDetectRedirect } from '@/helpers/redirectCustom'
import MessageView from '../messageView/MessageView'
import ProfileForm from '../profileForm/ProfileForm'
import { useAuthenticate } from '@/hooks/useAuthenticate'
import { ProfileViewProps } from './ProfileViewProps'
import getLanguage, { LanguagesType } from '@/models/i18n'
import NavbarOrg from '@/components/organism/navbarOrg/NavbarOrg'
import FooterOrg from '@/components/organism/footerOrg/FooterOrg'

const ProfileView = ({ lng }: ProfileViewProps) => {
  const [lang, setLang] = useState<LanguagesType>(lng)
  const defaultLanguage = getLang()

  const changeLang = (lang: LanguagesType) => {
    setLang(lang)
    changeLanguage(lang)
  }

  const translate = getLanguage(lng)
  const { network, onDetectNetwork, getUser } = useContext(SiteContext)
  const { verifyAuth } = useAuthenticate()
  const getStateLogin = getUser()

  useEffect(() => {
    validateLangUrl(lng)
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
      <NavbarOrg changeLang={changeLang} lng={lang} defaultLang={defaultLanguage}/>
      <DashboardTemplate lng={lang} defaultLang={defaultLanguage}>
        <>
          <div className="profile-view">
            <ProfileForm lng={lang} />
            <MessageView lng={lang} />
          </div>
        </>
      </DashboardTemplate>
      <FooterOrg lng={lang} defaultLang={defaultLanguage} />
    </>
  )
}

export default ProfileView