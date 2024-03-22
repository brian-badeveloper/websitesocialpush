import styles from './footer.module.css'

import { FooterProps } from './FooterProps'
import getLanguage, { LanguagesType } from '@/models/i18n'
import { ScrollLink } from '@/models/interfaces/ScrollLinkActive'
import actionRedirect from '@/helpers/actionRedirect'
import { onLink } from '@/helpers/redirectCustom'
import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'

const Footer = ({ lng, defaultLang }: FooterProps) => {

  const { onAction } = actionRedirect(defaultLang)
  const translate = getLanguage(lng)
  const today = new Date();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`row ${styles.footer__row}`}>
          <div className={styles.footer__info}>
            <div className={styles.footer__logo}>
              <a href={onLink({lng, defaultLang, link: ''})}>
                <IconFactory width={130} height={56} color="#FF735C" name="Logo" />
              </a>
            </div>
            <p className={styles.footer__info_text} dangerouslySetInnerHTML={{ __html: translate.FOOTER.COMPANY }}></p>
            <div className={styles.footer__info_contact}>
              <h3 className={styles.footer__info_contact__title}>{translate.FOOTER.COMPANY_TITLE}</h3>
              <p className={styles.footer__info_contact__text}>
              <b>{translate.FOOTER.COMPANY_EMAIL}: </b><a href="mailto:support@nextjs.com">support@nextjs.com</a>
              </p>
              <p className={styles.footer__info_contact__text}>
                <b>{translate.FOOTER.COMPANY_PHONE}: </b><a href="tel:5544584282">5544584282</a>
              </p>
            </div>
          </div>
          <div className={`footer__links ${styles.footer__links}`}>
            <div className={styles.footer__colum}>
              <ul className={styles.footer__items}>
                <li className={styles.footer__item}>
                  <h4
                    className={`${styles.footer__item_link} ${styles.footer__item_link___title}`}
                  >
                    {translate.FOOTER.LINK_TITLE_1}
                  </h4>
                </li>

                <li className={styles.footer__item}>
                  <a
                    data-target="false"
                    href={onLink({lng, link: ''})} 
                    className={styles.footer__item_link}
                  >
                    {translate.FOOTER.LINK_1}
                  </a>
                </li>

                <li className={styles.footer__item}>
                  <a 
                    type="button" 
                    className={styles.footer__item_link}
                    onClick={(e) => {
                      e.preventDefault()
                      onAction(lng,'about','/')
                    }}
                  >
                    {translate.FOOTER.LINK_2}
                  </a>
                </li>

                <li className={styles.footer__item}>
                  <a 
                    type="button"
                    className={styles.footer__item_link}
                    onClick={(e) => {
                      e.preventDefault()
                      onAction(lng,'contact','/')
                    }}
                  >
                    {translate.FOOTER.LINK_3}
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footer__colum}>
              <ul className={styles.footer__items}>
                <li className={styles.footer__item}>
                  <h4
                    className={`${styles.footer__item_link} ${styles.footer__item_link___title}`}
                  >
                    {translate.FOOTER.LINK_TITLE_2}
                  </h4>
                </li>

                <li className={styles.footer__item}>
                  <a type="button" className={styles.footer__item_link}>
                    {translate.FOOTER.LINK_4}
                  </a>
                </li>

                <li className={styles.footer__item}>
                  <a 
                    data-target="false"
                    href={onLink({lng, link: '/corporate-seo'})} 
                    className={`${styles.footer__item_link} ${styles.footer__item_link___sub}`}
                  >
                    {translate.FOOTER.LINK_5}
                  </a>
                </li>

                <li className={styles.footer__item}>
                  <a
                    data-target="false"
                    href={onLink({lng, link: '/ecommerce-seo'})}
                    className={`${styles.footer__item_link} ${styles.footer__item_link___sub}`}
                  >
                    {translate.FOOTER.LINK_6}
                  </a>
                </li>

                <li className={styles.footer__item}>
                  <a
                    data-target="false"
                    href={onLink({lng, link: '/seo-words'})} 
                    className={`${styles.footer__item_link} ${styles.footer__item_link___sub} ${styles.footer__item_link___sub_last}`}
                  >
                    {translate.FOOTER.LINK_7}
                  </a>
                </li>

                <li className={styles.footer__item}>
                  <a
                    data-target="false"
                    href={onLink({lng, link: '/content-marketing'})}
                    className={styles.footer__item_link}
                  >
                    {translate.FOOTER.LINK_8}
                  </a>
                </li>

                <li className={styles.footer__item}>
                  <a
                    data-target="false"
                    href={onLink({lng, link: '/pay-per-click'})}
                    className={styles.footer__item_link}>
                    {translate.FOOTER.LINK_9}
                  </a>
                </li>

                <li className={styles.footer__item}>
                  <a
                    data-target="false"
                    href={onLink({lng, link: '/display-advertising'})}
                    className={styles.footer__item_link}
                  >
                    {translate.FOOTER.LINK_10}
                  </a>
                </li>

                <li className={styles.footer__item}>
                  <a
                    data-target="false"
                    href={onLink({lng, link: '/social-media-advertising'})}
                    className={styles.footer__item_link}
                  >
                    {translate.FOOTER.LINK_11}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer__copyright}>
            <p className={styles.footer__copyrigth_paragraph}>
              Copyright © {today.getFullYear()} - {translate.FOOTER.COPY}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
