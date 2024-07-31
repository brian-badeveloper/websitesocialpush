import styles from './contactUs.module.css'

import getLanguage from '@/models/i18n'
import { ContactUsProps } from './ContactUsProps'
import FormContact from '@/components/molecules/formContact/FormContact'
import { onLink } from '@/helpers/redirectCustom'

const ContactUs = ({lng, defaultLang}: ContactUsProps) => {

  const translate = getLanguage(lng)

  return (
   <section className={styles.contact_us} id="contact">
    <div className="container">
      <div className={styles.contact_us__content}>
        <div className={styles.contact_us__row}>
          <div className={styles.contact_us__text}>
            <h2 className={styles.contact_us__title}>{translate.HOME.CONTACT_TITLE}</h2>
            <p className={styles.contact_us__paragraph}>{translate.HOME.CONTACT_PARAGRAPH}</p>
          </div>
          <div className={styles.contact_us__form}>
            <FormContact lng={lng} defaultLang={defaultLang} />
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default ContactUs