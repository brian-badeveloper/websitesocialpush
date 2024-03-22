import styles from './dropdownNavbar.module.css'

import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { DropdownNavbarProps } from './DropdownNavbarProps'
import useDropdownNavbar from './useDropdownNavbar'
import { onLink } from '@/helpers/redirectCustom'
import actionRedirect from '@/helpers/actionRedirect'

const DropdownNavbar = ({
	title,
	options,
	type_sub = false,
	lng,
	defaultLang,
	orientation
}: DropdownNavbarProps) => {

	const { content, changeActive, changeActiveSub } = useDropdownNavbar()
	const { onAction } = actionRedirect(defaultLang)

	const onChangeStatus = () => {

		if (!type_sub) {
			return changeActive()
		}

		return changeActiveSub()
	}
	
	return (
		<li className={type_sub ? styles.dropdown_navbar__subitem : styles.dropdown_navbar__content} ref={content} >
			<div className={styles.dropdown_navbar__text} onClick={onChangeStatus}>
				{title}
				{
					!type_sub && <IconFactory color={'var(--black)'} height={22} width={22} name='ArrowDownRegular'/>
				}
			</div>
			<div className={`${styles.dropdown_navbar__subitems}  ${type_sub ? styles.dropdown_navbar__subitems___submenu : ''} ${styles[orientation]}`}>
				<ul className={styles.dropdown_navbar__items}>
					{options?.map((item, index)=>(				
							 'options' in item && item.options && item.options.length > 0 ? (
								<DropdownNavbar 
									lng={lng}
									defaultLang={defaultLang}
									options={item.options} 
									title={item.text}
									type_sub={true}
									key={`opt-${index}`}
									orientation={orientation}
								/>
							) : (
								<li className={styles.dropdown_navbar__item} key={`opt-${index}`}>
									<a 
										href={onLink({lng, defaultLang, link: item.link})}
										className={styles.dropdown_navbar__item_link}
										onClick={(e) => {
											e.preventDefault()
											onAction(lng, item.tag, item.link)
										}}
									>
										{item.text}
									</a>
								</li>
							)
						
					))}
				</ul>
			</div>

		</li>
	)
}

export default DropdownNavbar
