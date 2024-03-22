import styles from './actionNavbar.module.css'

import { ActionNavbarProps } from './ActionNavbarProps'
import HamburgerButton from '@/components/atoms/hamburgerButton/HamburgerButton'
import LanguageButton from '@/components/molecules/languageButton/LanguageButton'

const ActionNavbar = ({
  lng,
  status,
  show,
  onChangeStatus,
  changeLang,
  showLng,
  showArrow
}:ActionNavbarProps) => {

  return (
    <>
    <div className={`${styles.action__navbar_item} ${styles.action__navbar_item___lang}`}>
      <LanguageButton changeLanguage={changeLang} language={lng} showLng={showLng} showArrow={showArrow} />
    </div>
    <div className={`${styles.action__navbar_item} ${styles.action__navbar_item___flex}`}>
      <HamburgerButton onChangeStatus={onChangeStatus} show={show} status={status} color='#000' />
    </div>
    </>
  )
}

export default ActionNavbar