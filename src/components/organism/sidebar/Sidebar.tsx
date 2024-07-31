import React, { useContext, useState } from 'react'

import './sidebar.css'

import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { SiteContext } from '@/context/SiteContext'
import useSidebar from './useSidebar'
import { SidebarProps } from './SidebarProps'
import getLanguage from '@/models/i18n'

const Sidebar = ({lng, defaultLang, onChange}: SidebarProps) => {
  const {translate, statusSidebar, onChangeStatus, onLogout} = useSidebar({lng, defaultLang, onChange})

  return (
    <aside className={`sidebar ${statusSidebar ? 'active' : ''}`}>
      <div className="sidebar__container">
        <div className="sidebar__header">
          <button 
            className="sidebar__header-btn"
            onClick={onChangeStatus}
          >
            <IconFactory
              name="Bars"
              color="#fff"
              width={32}
              height={32}
            />
          </button>
          <span className="sidebar__header-text">{translate.SIDEBAR.TITLE}</span>
        </div>
        <div className="sidebar__body">
          <ul className="sidebar__items">
            <li className="sidebar__item">
              <a href={`/${lng}/dashboard`} className="sidebar__link">
                <span className="sidebar__link-content">
                  <span className="sidebar__link-icon">
                    <IconFactory
                      name="Home"
                      color="#fff"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span className="sidebar__link-text">{translate.SIDEBAR.LINK_1}</span>
                </span>
              </a>
            </li>
            <li className="sidebar__item">
              <a href={`/${lng}/dashboard/historic`} className="sidebar__link">
                <span className="sidebar__link-content">
                  <span className="sidebar__link-icon">
                    <IconFactory
                      name="History"
                      color="#fff"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span className="sidebar__link-text">{translate.SIDEBAR.LINK_2}</span>
                </span>
              </a>
            </li>
            <li className="sidebar__item">
              <a href={`/${lng}/dashboard/profile`} className="sidebar__link">
                <span className="sidebar__link-content">
                  <span className="sidebar__link-icon">
                    <IconFactory
                      name="Person"
                      color="#fff"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span className="sidebar__link-text">{translate.SIDEBAR.LINK_3}</span>
                </span>
              </a>
            </li>
            <li className="sidebar__item sidebar__item--logout">
              <a 
                type="button" 
                className="sidebar__link"
                onClick={onLogout}
              >
                <span className="sidebar__link-content">
                  <span className="sidebar__link-icon">
                    <IconFactory
                      name="Logout"
                      color="#fff"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span className="sidebar__link-text">{translate.SIDEBAR.LINK_4}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar__footer">
          <a
            type="button" 
            className="sidebar__link"
            onClick={onLogout}
          >
            <span className="sidebar__link-content">
              <span className="sidebar__link-icon">
                <IconFactory
                  name="Logout"
                  color="#fff"
                  width={32}
                  height={32}
                />
              </span>
              <span className="sidebar__link-text">{translate.SIDEBAR.LINK_4}</span>
            </span>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar