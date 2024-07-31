import { useRef } from 'react'
import './status.css'
import { StatusProps } from './StatusProps'
import { IconFactory } from '../icons/domain/use-cases/factoryIcon'
import { IconsType } from '../icons/domain/models/IconsType'
import getLanguage from '@/models/i18n'

const Status = ({
	status,
	size,
	textSize,
	language = 'en',
	disable,
}: StatusProps) => {

	const translate = getLanguage(language)
	
	return (
		<button
			className={`status ${status} ${size}`}
			disabled={disable}
			
		>
			<span className="status__icon">
				<IconFactory
					name={
						{
							paid: 'Heart',
							unpaid: 'Loading',
							cancel: 'Times'
						}[status] as IconsType
					}
					width={18}
					height={18}
					color="#fff"
				/>
			</span>
			<span 
				className="status__text"
				style={{ fontSize: `${textSize}px` }}
			>
			{
				{
					paid: translate.LABEL.STATUS_PAID,
					unpaid: translate.LABEL.STATUS_UNPAID,
					cancel: translate.LABEL.STATUS_CANCEL
				}[status]
			}
		</span>
		</button>
	)
}

export default Status
