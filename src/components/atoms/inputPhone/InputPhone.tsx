import styles from './inputPhone.module.css'

import { InputPhoneProps } from './InputPhoneProps'
import useInputPhone from './useInputPhone'

const InputPhone = ({ 
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
	borderAddon = 2,
	borderAddonColor = '#2C2D4B',
	readonly = false,
	country,
	onSelectCountry,
	countryState
}: InputPhoneProps) => {

	const {
		inputPhone,
		codeCountry,
		prefixCountry,
		countries,
		imageCountry,
		handleActiveInput,
	} = useInputPhone({country, countryState, onSelectCountry})

	return (
		<>
			{
				label && (
					<label 
						className={styles.input_phone__label} 
						onClick={(e) => handleActiveInput(e)} 
						style={{ color: color }}
					>{label}</label>
				)
			}
			<div 
				className={`${styles.input_phone} ${size ? styles[size] : ''}`} 
				style={{
					background,
					border: `${border}px solid ${borderColor}`,
					borderRadius: `${borderRadius}px`,
				}}
			>
				<input name={`${name}_prefix`} type="hidden" value={prefixCountry} />
				<input name={`${name}_code`} type="hidden" value={codeCountry} />
				<input
					autoComplete="off"
					className={styles.input_phone__field}
					onChange={onChange}
					name={name}
					value={value}
					type={type}
					ref={inputPhone}
					placeholder={placeholder}
					style={{
						borderTopRightRadius: `${borderRadius}px`,
						borderBottomRightRadius: `${borderRadius}px`,
					}}
					readOnly={readonly}
					onPaste={(e) => { e.preventDefault(); }} 
				/>
				<span 
					className={`${styles.input_phone__addon} ${ borderAddon && borderAddon > 0 ? styles.input_phone__addon___special : '' }`} 
					onClick={(e) => handleActiveInput(e)}
					style={{
						borderTopLeftRadius: `${borderRadius}px`,
						borderBottomLeftRadius: `${borderRadius}px`,
						borderRight: `${borderAddon}px solid ${borderAddonColor}`,
					}}
				>
					<i 
						className={`${styles.input_phone__flag}`} 
						style={{ backgroundImage: `url(${imageCountry})`}}
					></i> {prefixCountry}
				</span>
			</div>
		</>
	)
}

export default InputPhone