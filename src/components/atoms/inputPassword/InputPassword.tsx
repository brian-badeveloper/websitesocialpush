import { MouseEventHandler, useRef, useState } from 'react'

import { InputPasswordProps } from './InputPasswordProps'

import './inputPassword.css'
import { IconFactory } from '../icons/domain/use-cases/factoryIcon'

const InputPassword = ({ 
	onChange, 
	label, 
	name, 
	value, 
	placeholder,  
	size,
	color = '#868686',
	background = 'transparent',
	border = 2,
	borderRadius = 10,
	borderColor = '#a8a6a6',
	readonly = false
}: InputPasswordProps) => {

	const input = useRef<HTMLInputElement>(null)
	const [status, setStatus] = useState<boolean>(false)

	const onClickInput:MouseEventHandler<HTMLLabelElement> = () => {
		input.current?.focus()
	}

	const onChangeStatus:MouseEventHandler<HTMLSpanElement> = () => {
		setStatus(!status)
	}

	return (
		<>
			{
				label && (
					<label 
						className="input-password-label" 
						onClick={onClickInput} 
						style={{ color: color }}
					>{label}</label>
				)
			}
			<div className={`input-password__content ${size}`}>
				<input
					autoComplete="off"
					className="input-password"
					onChange={onChange}
					name={name}
					value={value}
					type={status ? 'text' : 'password'}
					ref={input}
					placeholder={placeholder}
					style={{
						background,
						border: `${border}px solid ${borderColor}`,
						borderRadius: `${borderRadius}px`,
					}}
					readOnly={readonly}
				/>
				<span className="input-password__button" onClick={onChangeStatus}>
					<IconFactory
						color="#333333"
						name={status ? 'Eye' : 'EyeClose'}
						width={status ? 18 : 24}
						height={status ? 18 : 24}
					/>
				</span>
			</div>
		</>
	)
}

export default InputPassword
