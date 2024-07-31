import React, { FormEventHandler, ChangeEvent, useContext } from 'react'

import './loginForgot.css'

import Input from '@/components/atoms/input/Input'
import { LoginForgotProps, LoginForgotParams } from './LoginForgotProps'
import Button from '@/components/atoms/button/Button'
import useSendLoginForgot from './hooks/useSendLoginForgot'
import Alert from '@/components/molecules/alert/Alert'
import getLanguage from '@/models/i18n'

const formInit: LoginForgotParams = {
  email: ''
}

const LoginForgot = ({lng, onChangeView, onChangeEmail}: LoginForgotProps) => {

  const {
    onSubmit,
    onStatus,
    error,
    formState, 
    onInput, 
    onCheck, 
    onDisableButton, 
    buttonState
  } = useSendLoginForgot({lng, initialForm: formInit, onChangeEmail, onChangeView})
  const translate = getLanguage(lng)

  return (
    <div className="login-forgot-form">
      <form onSubmit={onSubmit}>
        <div className="login-forgot-form__content">
          {
            error.status && <Alert {...error} onStatus={onStatus} fixed />
          }
          <div className="login-forgot-form__row">
            <div className="login-forgot-form__header">
              <p className="login-forgot-form__header-action">{translate.LABEL.REGISTER_TEXT} <a href={`/${lng}/register`}>{translate.LABEL.REGISTER_LINK}</a></p>
              <h3 className="login-forgot-form__header-subtitle">{translate.LOGIN.FORM_FORGOT_SUBTITLE}</h3>
              <h2 className="login-forgot-form__header-title">{translate.LOGIN.FORM_FORGOT_TITLE}</h2>
            </div>
            <div className="login-forgot-form__group">
              <Input
                name="email"
                onChange={onInput}
                type="email"
                label={translate.LABEL.EMAIL}
                placeholder="juan@mail.com"
                size="auto"
                value={formState.email}
                border={1}
                borderRadius={4}
                borderColor="#a8a6a6"
                color="#000"
              />
            </div>
            <div className="login-forgot-form__group">
              <Button
                bgStyle="primary"
                size="auto"
                textSize={16}
                borderRadius={5}
                disable={buttonState}
              >{translate.LABEL.FORGOT_BTN}</Button>
            </div>
            <div className="login-forgot-form__group login-forgot-form__group--last">
              <a type="button" className="login-forgot-form__link" onClick={(e) => onChangeView('Login')}>
                {translate.LABEL.LOGIN_LINK}
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForgot