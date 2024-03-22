import React, { MouseEventHandler, useRef } from 'react'

import styles from './textarea.module.css'

import { TextareaProps } from './TextareaProps'

const Textarea = ({ 
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
}: TextareaProps) => {

	const textarea = useRef<HTMLTextAreaElement>(null)

	const onClickTextArea:MouseEventHandler<HTMLLabelElement> = () => {
		textarea.current?.focus()
	}

	return (
		<>
			{
				label && (
					<label 
						className={styles.textarea_label} 
						onClick={onClickTextArea}
						style={{ color: color }}
					>{label}</label>
				)
			}
			<textarea
				autoComplete="off"
				className={`${styles.textarea} ${size ? styles[size] : ''}`}
				onChange={onChange}
				name={name}
				value={value}
				ref={textarea}
				placeholder={placeholder}
				style={{
					background,
					border: `${border}px solid ${borderColor}`,
					borderRadius: `${borderRadius}px`,
				}}
			></textarea>
		</>
	)
}

export default Textarea
