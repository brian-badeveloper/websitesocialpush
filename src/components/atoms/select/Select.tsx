import React, { MouseEventHandler, useRef } from 'react'

import styles from './select.module.css'

import { SelectProps } from './SelectProps'
import { IconFactory } from '../icons/domain/use-cases/factoryIcon'

const Select = ({ 
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
	options = []
}: SelectProps) => {

	const select = useRef<HTMLSelectElement>(null)

	const onClickSelect:MouseEventHandler<HTMLLabelElement> = () => {
		select.current?.focus()
	}

	return (
		<>
			{
				label && (
					<label 
						className={styles.select_label} 
						onClick={onClickSelect} 
						style={{ color: color }}
					>{label}</label>
				)
			}
			<div className={`${styles.select_content} ${size ? styles[size] : ''}`}>
				<select
					autoComplete="off"
					className={`${styles.select} ${size ? styles[size] : ''}`}
					onChange={onChange}
					name={name}
					value={value}
					ref={select}
					style={{
						background,
						border: `${border}px solid ${borderColor}`,
						borderRadius: `${borderRadius}px`,
					}}
				>
					<option value="">{placeholder}</option>
					{
						options?.map((item,key) => (
							<option value={item.value} key={`option-${key}-${new Date().getTime()}`}>
								{item.name}
							</option>
						))
					}
				</select>
				<IconFactory
					name="ArrowDown"
					width={15}
					height={15}
					color={color}
				/>
			</div>
		</>
	)
}

export default Select
