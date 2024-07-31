import React, { FormEventHandler, ChangeEvent, useContext } from 'react'

import './loginPassword.css'

import Input from '@/components/atoms/input/Input'
import { LoginPasswordProps, LoginPasswordParams } from './LoginPasswordProps'
import Button from '@/components/atoms/button/Button'
import useSendLoginPassword from './hooks/useSendLoginPassword'
import Alert from '@/components/molecules/alert/Alert'
import InputPassword from '@/components/atoms/inputPassword/InputPassword'
import getLanguage from '@/models/i18n'

const formInit: LoginPasswordParams = {
  password: '',
  password2: ''
}

const LoginPassword = ({lng, onChangeView, onChangeEmail, email, onChangeOtp, otp}: LoginPasswordProps) => {

  const {
    onSubmit,
    onStatus,
    error,
    formState, 
    onInput, 
    onCheck, 
    onDisableButton, 
    buttonState
  } = useSendLoginPassword({lng, initialForm: formInit, email, onChangeView, onChangeEmail, otp, onChangeOtp})
  const translate = getLanguage(lng)

  return (
    <div className="login-password-form">
      <form onSubmit={onSubmit}>
        <div className="login-password-form__content">
          {
            error.status && <Alert {...error} onStatus={onStatus} fixed />
          }
          <div className="login-password-form__row">
            <div className="login-password-form__header">
              <p className="login-password-form__header-action">{translate.LABEL.REGISTER_TEXT} <a href={`/${lng}/register`}>{translate.LABEL.REGISTER_LINK}</a></p>
              <h3 className="login-password-form__header-subtitle">{translate.LOGIN.FORM_PASSWORD_SUBTITLE}</h3>
              <h2 className="login-password-form__header-title">{translate.LOGIN.FORM_PASSWORD_TITLE}</h2>
            </div>
            <div className="login-password-form__group">
              <InputPassword
                name="password"
                onChange={onInput}
                label={translate.LABEL.PASSWORD}
                placeholder="*********"
                size="auto"
                value={formState.password}
                border={1}
                borderRadius={4}
                borderColor="#a8a6a6"
                color="#000"
              />
            </div>
            <div className="login-password-form__group">
              <InputPassword
                name="password2"
                onChange={onInput}
                label={translate.LABEL.PASSWORD_CONFIRM}
                placeholder="*********"
                size="auto"
                value={formState.password2}
                border={1}
                borderRadius={4}
                borderColor="#a8a6a6"
                color="#000"
              />
            </div>
            <div className="login-password-form__group">
              <Button
                bgStyle="primary"
                size="auto"
                textSize={16}
                borderRadius={5}
                disable={buttonState}
              >{translate.LABEL.RESET_BTN}</Button>
            </div>
            <div className="login-password-form__group login-password-form__group--last">
              <a href="#" className="login-password-form__link" onClick={(e) => onChangeView('Login')}>
                {translate.LABEL.LOGIN_LINK}
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginPassword