import styles from './inputPhonePicker.module.css'

import { InputPhonePickerProps } from './InputPhonePickerProps'
import useInputPhonePicker from './useInputPhonePicker'

const InputPhonePicker = ({ 
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
}: InputPhonePickerProps) => {

	const {
		inputPhone,
		codeCountry,
		prefixCountry,
		countries,
		imageCountry,
		onSelect,
		pickerActive,
		openPicker,
		handleActiveInput,
    validateEventClick
	} = useInputPhonePicker({country, countryState, onSelectCountry})

	return (
		<>
			{
				label && (
					<label 
						className={styles.input_phone_picker__label} 
						onClick={(e) => handleActiveInput(e)} 
						style={{ color: color }}
					>{label}</label>
				)
			}
			<div 
				className={`${styles.input_phone_picker} ${size ? styles[size] : ''}`} 
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
					className={styles.input_phone_picker__field}
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
					onClick={validateEventClick}
				/>
				<span 
					className={`${styles.input_phone_picker__addon} ${ borderAddon && borderAddon > 0 ? styles.input_phone_picker__addon___special : '' }`} 
					onClick={openPicker}
					style={{
						borderTopLeftRadius: `${borderRadius}px`,
						borderBottomLeftRadius: `${borderRadius}px`,
						borderRight: `${borderAddon}px solid ${borderAddonColor}`,
					}}
				>
					<i 
						className={`${styles.input_phone_picker__flag} ${ ( pickerActive ? styles.input_phone_picker__flag___active : '') }`} 
						style={{ backgroundImage: `url(${imageCountry})`}}
					></i> {prefixCountry}
				</span>
				<div 
					className={styles.input_phone_picker__items} 
					style={{ 
						display: ( pickerActive ? 'block' : 'none')
					}}
				>
          <ul className={styles.input_phone_picker__options}>
            {
              countries.map(item => (
                <li 
									className={`${styles.input_phone_picker__option} ${ (item.isoCode === codeCountry ? styles.input_phone_picker__option___active : '') }`} 
									key={item.isoCode + item.dialCode.slice(1)} 
									onClick={ (e) => onSelect(e,item.dialCode.slice(1), item.isoCode, item.flag) }
								>
                  <i 
										className={`${styles.input_phone_picker__flag} ${styles.input_phone_picker__flag___item}`}
										style={{ backgroundImage: `url(${item.flag})` }}
									></i>
                  {item.name} <span className={styles.input_phone_picker__option___id}>{item.dialCode}</span>
                </li>
              ))
            }
          </ul>
        </div>
			</div>
		</>
	)
}

export default InputPhonePicker