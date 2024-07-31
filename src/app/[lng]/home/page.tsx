'use client'
import { useContext, useEffect, useState } from 'react'

// images

// components, interfaces, types and functions

import { SearchParams } from '@/models/interfaces/ParamsProps'
import { changeLanguage, getLang, InitializeLanguage, validateLangUrl } from '@/helpers/language'
import { onActiveLinks, onDetectRedirect } from '@/helpers/redirectCustom'
import getLanguage, { LanguagesType } from '@/models/i18n'
import { Seo } from '@/components/atoms/seo/Seo'
import FooterOrg from '@/components/organism/footerOrg/FooterOrg'
import NavbarOrg from '@/components/organism/navbarOrg/NavbarOrg'
import { SiteContext } from '@/context/SiteContext'
import useInfo from './hooks/useInfo'
import { useAuthenticate } from '@/hooks/useAuthenticate'
import { FollowerItemProps } from './presentation/organism/followerItem/FollowerItemProps'
import { LikeItemProps } from './presentation/organism/likeItem/LikeItemProps'
import { PlanItemProps } from './presentation/organism/planItem/PlanItemProps'
import Banner from './presentation/organism/banner/Banner'
import AboutUs from './presentation/organism/aboutUs/AboutUs'
import Networks from './presentation/organism/networks/Networks'
import Quote from './presentation/organism/quote/Quote'
import Followers from './presentation/organism/followers/Followers'
import { messageCustom } from '@/helpers/messageCustom'
import Likes from './presentation/organism/likes/Likes'
import Plans from './presentation/organism/plans/Plans'
import Strategies from './presentation/organism/strategies/Strategies'
import Faqs from './presentation/organism/faqs/Faqs'
import ContactUs from './presentation/organism/contactUs/ContactUs'

const HomePage = ({ params: { lng } }: SearchParams) => {

  const [lang, setLang] = useState<LanguagesType>(lng)
  const defaultLanguage = getLang()

  const changeLang = (lang: LanguagesType) => {
    setLang(lang)
    changeLanguage(lang)
  }

  const { network, onDetectNetwork, getInitPlans, getAllPlansByNetworkAndType } = useContext(SiteContext)
  const { faqsList, strategiesOptions } = useInfo()
  const { verifyAuth } = useAuthenticate()

  const followersData:FollowerItemProps[] = getAllPlansByNetworkAndType('Instagram','Follower') as FollowerItemProps[]
  const likesData:LikeItemProps[] = getAllPlansByNetworkAndType('Instagram','Like') as LikeItemProps[]
  const plansData:PlanItemProps[] = getAllPlansByNetworkAndType('Instagram','Plan') as PlanItemProps[]

  const translate = getLanguage(lang)

  useEffect(() => {
    onActiveLinks()
    onDetectRedirect()
    onDetectNetwork()
  },[])

  useEffect(() => {
    getInitPlans()
  },[])

  useEffect(() => {
    verifyAuth()
  },[lang])

  
  return (
    <>
      <Seo
        title={translate.HOME.TITLE}
        description={translate.HOME.DESCRIPTION}
        lang={lang}
      />
      <NavbarOrg changeLang={changeLang} lng={lang} defaultLang={defaultLanguage} />
      <Banner
        title={translate.HOME.BANNER_TITLE}
        paragraph={translate.HOME.BANNER_PARAGRAPH}
        textBtn={translate.HOME.BANNER_BUTTON}
      />
      <AboutUs
        subtitle={translate.HOME.ABOUT_SUBTITLE}
        title={translate.HOME.ABOUT_TITLE}
        paragraph={translate.HOME.ABOUT_PARAGRAPH}
      />
      <Networks 
        title={translate.HOME.NETWORK_TITLE}
      />
      <Quote
        text={translate.HOME.QUOTE_TEXT}
        type={network}
        comment={87}
        likes={700}
        followers="10k"
      />
      <div id="followers">
      {
        followersData.length > 0 && (
          <Followers
            title={
              messageCustom({
                message: translate.HOME.FOLLOWER_TITLE,
                params: [{replace: 'network',to: network}]
              })
            }
            text={translate.HOME.FOLLOWER_TEXT}
            textTwo={translate.HOME.FOLLOWER_TEXT_TWO}
            textBtn={translate.HOME.FOLLOWER_BTN}
            textBtnActive={translate.HOME.FOLLOWER_BTN_ACTIVE}
            dataCards={followersData}
            lng={lang}
          />
        )
      } 
      </div>
      <div id="likes">
      {
        likesData.length > 0 && (
          <Likes
            title={
              messageCustom({
                message: translate.HOME.LIKES_TITLE,
                params: [{replace: 'network',to: network}]
              })
            }
            text={translate.HOME.LIKES_TEXT}
            dataCards={likesData}
            lng={lang}
            />
          )
        }
      </div>
      <div id="plans">
      {
        plansData.length > 0 && (
          <Plans 
          title={
            messageCustom({
              message: translate.HOME.PLANS_TITLE,
              params: [{replace: 'network',to: network}]
            })
          }
          text={translate.HOME.PLANS_TEXT}
          dataCards={plansData} 
          lng={lang}
          />
        )
      }    
      </div>  
      <Strategies
        subtitle={translate.HOME.STRATEGIES_SUBTITLE}
        title={translate.HOME.STRATEGIES_TITLE}
        paragraph={translate.HOME.STRATEGIES_TEXT}
        options={strategiesOptions}
      />
      <div id="contactus">
        <ContactUs
          title={translate.HOME.CONTACT_TITLE}
          paragraph={translate.HOME.CONTACT_PARAGRAPH}
          lng={lang}
          defaultLang={defaultLanguage}
        />
      </div>
      <Faqs
        title={translate.HOME.FAQ_TITLE}
        questions={faqsList}
      />
      <FooterOrg lng={lang} defaultLang={defaultLanguage} />
    </>
  )
}

export default HomePage