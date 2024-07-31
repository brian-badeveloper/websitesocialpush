import { useRef } from 'react'
import './buttonSimple.css'
import { ButtonSimpleProps } from './ButtonSimpleProps'
import { IconFactory } from '../icons/domain/use-cases/factoryIcon'

const ButtonSimple = ({
	children,
	type,
	bgStyle,
	size,
	textSize,
	onClick,
	redirectTo,
	disable,
}: ButtonSimpleProps) => {
	
	const onRedirect = () => {
		if (redirectTo) {
			 return window.location.href = redirectTo
		}
	}

	return (
		<button
			onClick={disable ? () => {} : redirectTo ? onRedirect : onClick}
			className={`button-simple ${bgStyle} ${size}`}
			type={type}
			disabled={disable}
			
		>
			<span className="button-simple__icon">
				<IconFactory
					name="ArrowLeft"
					width={18}
					height={18}
					color="#fff"
				/>
			</span>
			<span 
				className="button-simple__text"
				style={{ fontSize: `${textSize}px` }}
			>{children}</span>
		</button>
	)
}

export default ButtonSimple
