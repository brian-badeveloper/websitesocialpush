import styles from './languageButton.module.css'

import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { LanguageButtonProps } from './LanguageButtonProps'

const LanguageButton = ({
  language, 
  changeLanguage, 
  showLng = true,
  showArrow = true,
  color = '#000'
}: LanguageButtonProps) => {

  return (
    <div className={styles.language_button}>
      <div className={styles.language_button__header}>
        <div className={styles.language_button__header_icon}>
          <IconFactory
            color={color}
            height={22}
            name="World"
            width={22}
          />
        </div>
        {
          showLng && (
            <span 
              className={styles.language_button__header_text}
              style={{color}}
            >{language}</span>
          )
        }
        {
          showArrow && (
            <div className={`${styles.language_button__header_icon} ${styles.language_button__header_icon___arrow}`}>
              <IconFactory
                color={color}
                height={22}
                name="ArrowDownRegular"
                width={22}
              />
            </div>
          )

        }
      </div>
      <div className={styles.language_button__list}>
        <ul className={styles.language_button__items}>
          <li className={styles.language_button__item}>
            <button
              onClick={(e) => changeLanguage('es')} 
              className={styles.language_button__link}
            >ES</button>
          </li>
          <li className={styles.language_button__item}>
            <button
              onClick={(e) => changeLanguage('en')} 
              className={styles.language_button__link}
            >EN</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LanguageButton