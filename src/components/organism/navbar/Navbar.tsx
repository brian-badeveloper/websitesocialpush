import React, { useState, useContext, useEffect } from 'react'

import styles from './navbar.module.css'

import { NavbarProps } from './NavbarProps'
import ActionNavbar from '../actionNavbar/ActionNavbar'
import getLanguage, { LanguagesType } from '@/models/i18n'
import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import LanguageButton from '@/components/molecules/languageButton/LanguageButton'
import Button from '@/components/atoms/button/Button'
import DropdownNavbar from '../dropdownNavbar/DropdownNavbar'
import { onLink } from '@/helpers/redirectCustom'
import actionRedirect from '@/helpers/actionRedirect'
import useNavbar from './hooks/useNavbar'

const Navbar = ({
	lng,
	changeLang,
	defaultLang
}: NavbarProps) => {
	const [statusNavbar, setStatusNavbar] = useState<boolean>(false);
  const { onAction } = actionRedirect(defaultLang)
	const translate = getLanguage(lng)
	const { options } = useNavbar(lng)

	const onChangeStatus = () => {
		setStatusNavbar(!statusNavbar);
	}

	return (
		<div className={styles.navbar}>
			<div className="container">
				<div className={styles.navbar__row}>
					<div className={styles.navbar__logo}>
					 	<a 
							href={onLink({lng, defaultLang, link: '/'})}
							className={styles.navbar__logo_link}
						>
							<IconFactory 
								width={200} 
								height={40} 
								color="var(--primary)" 
								name="Logo"
							/>
						</a>
					</div>
					<div className={`${styles.navbar__menu} ${statusNavbar ? styles.navbar__menu___active : ''}`}>
						<ul className={`navbar__menu_items ${styles.navbar__menu_items}`}>
							<li className={styles.navbar__menu_item}>
								<a 
									href={onLink({lng, link: ''})}
									className={styles.navbar__menu_link}
								>{translate.NAVBAR.ITEM_1}</a>
							</li>
							<DropdownNavbar
								title={translate.NAVBAR.ITEM_2}
								lng={lng}
								defaultLang={defaultLang}
								options={options}
								orientation='left'
							/>
							<li className={styles.navbar__menu_item}>
								<a 
									type="button"
									className={styles.navbar__menu_link}
									onClick={(e) => {
										e.preventDefault()
										onAction(lng,'about','/')
									}}
								>{translate.NAVBAR.ITEM_3}</a>
							</li>
							<li className={styles.navbar__menu_item}>
								<a
									type="button"
									className={styles.navbar__menu_link}
									onClick={(e) => {
										e.preventDefault()
										onAction(lng,'contact','/')
									}}
								>{translate.NAVBAR.ITEM_4}</a>
							</li>
							<li className={`${styles.navbar__menu_item} ${styles.navbar__menu_item___lang}`}>
								<LanguageButton
									changeLanguage={changeLang}
									language={lng}
									showLng={true}
									showArrow={false}
								/>
							</li>
							<li className={`${styles.navbar__menu_item} ${styles.navbar__menu_item___button}`}>
								<Button
									bgStyle="primary"
									redirectTo={onLink({lng, link: '/'})}
									size='sm'
									textSize={20}
								>{translate.NAVBAR.ITEM_5}</Button>
							</li>
						</ul>
					</div>
					<div className={styles.navbar__actions}>
						<ActionNavbar
							lng={lng}
							changeLang={changeLang}
							show={false}
							status={statusNavbar}
							onChangeStatus={onChangeStatus}
							showLng={true}
							showArrow={false}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
