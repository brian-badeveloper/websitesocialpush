import React, { useContext, useState } from 'react'

import './dashboardTemplate.css'

import { DashboardTemplateProps } from './DashboardTemplateProps'
import Sidebar from '../sidebar/Sidebar'
import { SiteContext } from '@/context/SiteContext'
import ButtonSimple from '@/components/atoms/buttonSimple/ButtonSimple'
import getLanguage from '@/models/i18n'

const DashboardTemplate = ({lng, defaultLang, children}: DashboardTemplateProps) => {
  const { error, onAlert, onAlertStatus } = useContext(SiteContext)
	const translate = getLanguage(lng)
  const [active, setActive] = useState<Boolean>(false)

  const onChangeActive = () => {
    setActive(!active)
  }

  return (
    <section className={`dashboard-template ${active ? 'active' : ''}`}>
        <div className="dashboard-template__row">
          <Sidebar 
            lng={lng}
            defaultLang={defaultLang}
            onChange={onChangeActive}
          />
          <div className="dashboard-template__content">
            <div className="container">
              <div className="dashboard-template__btn-go-back">
                <ButtonSimple
                  bgStyle="primary"
                  redirectTo={`/${lng}/dashboard`}
                  size="auto"
                  textSize={16}
                >
                  {translate.DASHBOARD.HOME_BTN_GO_BACK}
                </ButtonSimple>
              </div>
              {children}
            </div>
          </div>
        </div>
      </section>
  )
}

export default DashboardTemplate
