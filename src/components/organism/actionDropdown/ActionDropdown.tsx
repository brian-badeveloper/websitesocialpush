import React, { useContext } from 'react'

import './actionDropdown.css'

import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { ActionDropdownProps } from './ActionDropdownProps'
import { SiteContext } from '@/context/SiteContext'
import { IconsType } from '@/components/atoms/icons/domain/models/IconsType'

const ActionDropdown = ({icon, text, onlyIconResponsive, items }: ActionDropdownProps) => {

  const onRedirect = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, redirectTo?: string) => {
		if (redirectTo) {
			 return window.location.href = redirectTo
		}
	}

  return (
    <div className={`action-dropdown ${onlyIconResponsive ? 'icon-responsive' : ''}`}>
      <button className="action-dropdown__header">
        {
          icon && (
            <span className="action-dropdown__icon">
              <IconFactory
                color="#ffffff"
                height={18}
                name={icon as IconsType}
                width={18}
              />
            </span>
          )
        }
        {
          text && (
            <span className="action-dropdown__text">{text}</span>
          )
        }
      </button>
      {
        items && (
          <div className="action-dropdown__options">
            <ul className="action-dropdown__items">
              {
                items.map((item, key) => (
                  <li className="action-dropdown__item" key={`action-dropdown-item-${key}`}>
                    <a
                      onClick={item.redirectTo ? (e) => onRedirect(e, item.redirectTo) : item.action ? item.action : () => {}}
                      type="bottom"
                      className="action-dropdown__item-content"
                    >
                      {
                        item.icon && (
                          <span className="action-dropdown__item-icon">
                            <IconFactory
                              color="rgba(255, 255, 255, 0.55)"
                              height={18}
                              name={item.icon as IconsType}
                              width={18}
                            />
                          </span>
                        )
                      }
                      {
                        item.text && (
                          <span className="action-dropdown__item-text">{item.text}</span>
                        )
                      }
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default ActionDropdown
