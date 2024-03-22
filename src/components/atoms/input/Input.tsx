import React, { MouseEventHandler, useRef } from 'react'

import styles from './input.module.css'

import { InputProps } from './InputProps'

const Input = ({ 
	onChange, 
	label, 
	name, 
	value, 
	placeholder, 
	type, 
	size,
	color = '#868686',
	background = 'transparent',
	border = 2,
	borderRadius = 10,
	borderColor = '#a8a6a6',
	readonly = false
}: InputProps) => {

	const input = useRef<HTMLInputElement>(null)

	const onClickInput:MouseEventHandler<HTMLLabelElement> = () => {
		input.current?.focus()
	}

	return (
		<>
			{
				label && (
					<label 
						className={styles.input_label} 
						onClick={onClickInput} 
						style={{ color: color }}
					>{label}</label>
				)
			}
			<input
				autoComplete="off"
				className={`${styles.input} ${size ? styles[size] : ''}`}
				onChange={onChange}
				name={name}
				value={value}
				type={type}
				ref={input}
				placeholder={placeholder}
				style={{
					background,
					border: `${border}px solid ${borderColor}`,
					borderRadius: `${borderRadius}px`,
				}}
				readOnly={readonly}
			/>
		</>
	)
}

export default Input
