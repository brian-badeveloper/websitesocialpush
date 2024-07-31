"use client"
import './actionNavbarOrg.css'

import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { ActionNavbarOrgProps } from './ActionNavbarOrgProps'
import HamburgerButton from '@/components/atoms/hamburgerButton/HamburgerButton'
import useActionNavbarOrg from './useActionNavbarOrg'
import ActionDropdown from '../actionDropdown/ActionDropdown'
import { fullNameUser } from '@/helpers/nameUser'
import getLanguage from '@/models/i18n'
import LanguageButtonOrg from '@/components/molecules/languageButtonOrg/LanguageButtonOrg'

const ActionNavbarOrg = ({
  lng,
  defaultLang,
  loginLink, 
  cartNumer = 0, 
  cartLink,
  status,
  show,
  onChangeStatus,
  changeLang
}:ActionNavbarOrgProps) => {

  const { onLogout, getStateLogin, quantity } = useActionNavbarOrg(lng,cartNumer)

  const translate = getLanguage(lng)

  return (
    <>
    <div className="action__navbar-item">
      {
        getStateLogin.logged ? (
          <ActionDropdown
            icon="User"
            text={fullNameUser({full_name: getStateLogin.user?.name})}
            onlyIconResponsive={true}
            items={[
              {
                icon: "Home",
                text: translate.LABEL.DASHBOARD_BTN,
                redirectTo: `/${lng}/dashboard`
              },
              {
                icon: "History",
                text: translate.LABEL.HISTORIC_BTN,
                redirectTo: `/${lng}/dashboard/historic`
              },
              {
                icon: "UserInSolid",
                text: translate.LABEL.PROFILE_BTN,
                redirectTo: `/${lng}/dashboard/profile`
              },
              {
                icon: "Logout",
                text: translate.LABEL.LOGOUT_BTN,
                action: onLogout
              }
            ]}
          />
        ) : (
          <a href={loginLink} className="action__navbar-link">
            <IconFactory
              color="#ffffff"
              height={21}
              name="User"
              width={21}
            />
          </a>
        )
      }
    </div>
    <div className="action__navbar-item">
      <a href={cartLink} className="action__navbar-link action__navbar-link--cart">
        <IconFactory
          color="#ffffff"
          height={25}
          name="Cart"
          width={25}
        />
        <span className="action__navbar-number">{quantity}</span>
      </a>
    </div>
    <div className="action__navbar-item">
      <LanguageButtonOrg
        changeLanguage={changeLang}
        language={lng}
      />
    </div>
    <div className="action__navbar-item action__navbar-item--flex">
      <HamburgerButton onChangeStatus={onChangeStatus} show={show} status={status} />
    </div>
    </>
  )
}

export default ActionNavbarOrg