import React, { FormEventHandler, ChangeEvent, useContext } from 'react'

import './loginOTP.css'

import Input from '@/components/atoms/input/Input'
import { LoginOTPProps, LoginOTPParams } from './LoginOTPProps'
import Button from '@/components/atoms/button/Button'
import useSendLoginOTP from './hooks/useSendLoginOTP'
import Alert from '@/components/molecules/alert/Alert'
import OtpInput from '@/components/atoms/otp-input/OtpInput'
import getLanguage from '@/models/i18n'

const LoginOTP = ({lng, email, onChangeView, onChangeOtp}: LoginOTPProps) => {

  const {
    onSubmit,
    onStatus,
    error,
    regenerateCode
  } = useSendLoginOTP({lng, email, onChangeView, onChangeOtp})
  const translate = getLanguage(lng)

  return (
    <div className="login-otp-form">
        <div className="login-otp-form__content">
          {
            error.status && <Alert {...error} onStatus={onStatus} fixed />
          }
          <div className="login-otp-form__row">
            <div className="login-otp-form__header">
              <p className="login-otp-form__header-action">{translate.LABEL.REGISTER_TEXT} <a href={`/${lng}/register`}>{translate.LABEL.REGISTER_LINK}</a></p>
              <h3 className="login-otp-form__header-subtitle">{translate.LOGIN.FORM_OTP_SUBTITLE}</h3>
              <h2 className="login-otp-form__header-title">{translate.LOGIN.FORM_OTP_TITLE}</h2>
            </div>
            <div className="login-otp-form__group code-career__form--code">
              <OtpInput
                lng={lng}
                numInputs={6}
                onChange={onSubmit}
                type="number"
              />
            </div>
            <div className="login-otp-form__group ">
              <p className="code-career__link" onClick={regenerateCode}>{translate.LABEL.NEW_CODE_BTN}</p>
            </div>
            <div className="login-otp-form__group login-otp-form__group--last">
              <a type="button" className="login-otp-form__link" onClick={(e) => onChangeView('Login')}>
                {translate.LABEL.LOGIN_LINK}
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LoginOTP