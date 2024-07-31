import './languageButtonOrg.css'

import { LanguagesType } from '@/models/i18n'
import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { LanguageButtonOrgProps } from './LanguageButtonOrgProps'

const LanguageButtonOrg = ({language, changeLanguage}: LanguageButtonOrgProps) => {

  const onChangeLanguage = (lang: LanguagesType) => {
    changeLanguage(lang)
  }

  return (
    <div className="language-button">
      <div className="language-button__header">
        <span className="language-button__header-icon">
          <IconFactory
            color="#fff"
            height={25}
            name="World"
            width={25}
          />
        </span>
        <span className="language-button__header-text">{language}</span>
      </div>
      <ul className="language-button__items">
        <li className="language-button__item">
          <button
            onClick={(e) => onChangeLanguage('es')} 
            className="language-button__link"
          >ES</button>
        </li>
        <li className="language-button__item">
          <button
            onClick={(e) => onChangeLanguage('en')} 
            className="language-button__link"
          >EN</button>
        </li>
      </ul>
    </div>
  )
}

export default LanguageButtonOrg