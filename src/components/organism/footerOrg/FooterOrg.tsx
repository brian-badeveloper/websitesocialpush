'use client'
import './footerOrg.css'

import getLanguage from '@/models/i18n'
import { FooterOrgProps } from './FooterOrgProps'
import useFooterOrg from './useFooterOrg'

const FooterOrg = ({lng, defaultLang}: FooterOrgProps) => {

  const { onAction } = useFooterOrg()
  const today = new Date()
  const translate = getLanguage(lng)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__logo">
            <a href={`/${lng}`}>
              <span className="footer__logo-text">SocialPush</span>
            </a>
          </div>
          <div className="footer__about">
            <h4 className="footer__about-title">{translate.FOOTERORG.FOOTER_TITLE}</h4>
            <p className="footer__about-paragraph">{translate.FOOTERORG.FOOTER_TEXT_1}</p>
            {/* <p className="footer__about-paragraph">{translate.FOOTERORG.FOOTER_TEXT_2}</p> */}
          </div>
          <div className="footer__menu">
            <ul className="footer__menu-items">
              <li className="footer__menu-item">
                <a href={`/${lng}/legals/terms-and-conditions`} className="footer__menu-link">{translate.FOOTERORG.FOOTER_LINK_1}</a>
              </li>
              <li className="footer__menu-item">
                <a href={`/${lng}/legals/policies`} className="footer__menu-link">{translate.FOOTERORG.FOOTER_LINK_2}</a>
              </li>
              <li className="footer__menu-item">
                <a href={`/${lng}/legals/terms-and-conditions`} className="footer__menu-link">{translate.FOOTERORG.FOOTER_LINK_3}</a>
              </li>
              <li className="footer__menu-item">
                <a href={`/${lng}/legals/terms-and-conditions`} className="footer__menu-link">{translate.FOOTERORG.FOOTER_LINK_4}</a>
              </li>
              <li className="footer__menu-item">
                <a 
                  href={`/${lng}`}
                  onClick={(e) => {
                    e.preventDefault()
                    onAction(lng,'contactus','/')
                  }}
                  className="footer__menu-link"
                >{translate.FOOTERORG.FOOTER_LINK_5}</a>
              </li>
            </ul>
          </div>
          <div className="footer__copy">
            <p className="footer__copy-paragraph" suppressHydrationWarning>© Copyright 2017 - { today.getFullYear() } | {translate.FOOTERORG.FOOTER_COPY}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterOrg