'use client'
import { useState } from 'react'

import './otp-input.css'

import OTPInput from 'react-otp-input'
import { OtpInputProps } from './OtpInputProps'
import getLanguage from '@/models/i18n'

const OtpInput = ({ lng, value, onChange, numInputs, type, text}: OtpInputProps) => {
	const [otp, setOtp] = useState<string>(value ?? '')
	const translate = getLanguage(lng)

	const handleChange = (otp: string) => {
		setOtp(otp)
		onChange(otp)
	}

	return (
		<div className="otp">
			<OTPInput
				value={otp}
				onChange={handleChange}
				numInputs={numInputs}
				renderInput={(props) => <input {...props} />}
				renderSeparator={<div className="otp__separator"></div>}
				inputStyle="otp__input"
				inputType={type}
			/>
			{ 
				text && <span className="otp__text">{text}</span>
			}
		</div>
	)
}

export default OtpInput
