import dynamic from 'next/dynamic'
import React, { useState, useContext, useEffect } from 'react'

import './navbarOrg.css'

import { NavbarOrgProps } from './NavbarOrgProps'
import getLanguage, { LanguagesType } from '@/models/i18n'
import { onLink } from '@/helpers/redirectCustom'
import actionRedirect from '@/helpers/actionRedirect'
import useNavbar from './hooks/useNavbar'
import { SiteContext } from '@/context/SiteContext'
import Alert from '@/components/molecules/alert/Alert'
import ItemMenuNavbar from '@/components/molecules/itemMenuNavbar/ItemMenuNavbar'
import DropdownNavbarOrg from '../dropdownNavbarOrg/DropdownNavbarOrg'
const ActionNavbarOrg = dynamic(() => import('../actionNavbarOrg/ActionNavbarOrg'), { ssr: false })

const NavbarOrg = ({
	lng,
	changeLang,
	defaultLang
}: NavbarOrgProps) => {
	const { error, onAlert, onAlertStatus } = useContext(SiteContext)
	const [statusNavbar, setStatusNavbar] = useState<boolean>(false);
	const translate = getLanguage(lng)
	const { options } = useNavbar(lng)

	const onChangeStatus = () => {
		setStatusNavbar(!statusNavbar);
	}

	return (
		<div className="navbar">
			<div className="container">
				<div className="navbar__row">
					<div className="navbar__logo">
						<a 
							href={onLink({lng, defaultLang, link: '/'})}
						>SocialPush</a>
					</div>
					<div className={`navbar__menu ${statusNavbar ? 'navbar__menu--active' : ''}`}>
						<ul className="navbar__menu-items">
							<ItemMenuNavbar
								icon='Instagram'
								text='Instagram'
								redirectTo='/'
								network='Instagram'
								type='followers'
							/>
							<ItemMenuNavbar 
								icon='Tiktok' 
								text='Tiktok' 
								redirectTo='/'
								network='Tiktok'
								type='followers'
							/>
							<ItemMenuNavbar 
								icon='Youtube' 
								text='Youtube' 
								redirectTo='/'
								network='Youtube'
								type='followers'
							/>
							<ItemMenuNavbar
								icon='Facebook'
								text='Facebook' 
								redirectTo='/'
								network='Facebook'
								type='followers'
							/>
							<ItemMenuNavbar 
								icon='Twitter' 
								text='Twitter' 
								redirectTo='/'
								network='Twitter'
								type='followers'
							/>
							<DropdownNavbarOrg 
								iconLeft='PlusSharp' 
								options={options}
								title={translate.LABEL.OTHER_LINK}
							/>
						</ul>
					</div>
					<div className="navbar__actions">
						<ActionNavbarOrg
							loginLink={`/${lng}/login`}
							cartLink={`/${lng}/cart`}
							cartNumer={0}
							onChangeStatus={onChangeStatus} 
							show={false} 
							status={statusNavbar}
							lng={lng}
							changeLang={changeLang}
							defaultLang={defaultLang}
						/>
					</div>
				</div>
				{
					error.status && <Alert {...error} onStatus={onAlertStatus} fixed />
				}
			</div>
		</div>
	)
}

export default NavbarOrg
