import './dropdownNavbarOrg.css'

import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { DropdownNavbarProps } from './DropdownNavbarOrgProps'
import useDropdownNavbar from './useDropdownNavbarOrg'

const DropdownNavbarOrg = ({
	title, options, iconLeft
}: DropdownNavbarProps) => {

	const { content, changeActive, onAction } = useDropdownNavbar();

	const onChangeStatus = () => {
		changeActive();
	}
	
	return (
		<li className={`dropdown-navbar__content`} ref={content} >
			<div className="dropdown-navbar__text" onClick={onChangeStatus}>
				<IconFactory color='var(--white)' height={23} width={23} name={iconLeft}/>
				{title}
				<IconFactory color='var(--white)' height={23} width={23} name='ChevronDown'/>
			</div>
			<ul className="dropdown-navbar__subitems">
				{options?.map((item, index)=>(
					<li className="dropdown-navbar__subitem" key={`opt-${index}`}>
						<a 
							href={item.link}
							className="dropdown-navbar__subitem-link"
							onClick={(e) => {
								e.preventDefault()
								onAction({
									network: item.network ?? '', 
									tag: item.type ?? '',
									link: item.link
								})}
							}
						>{item.text}</a>
					</li>
				))}
			</ul>
		</li>
	)
}

export default DropdownNavbarOrg
