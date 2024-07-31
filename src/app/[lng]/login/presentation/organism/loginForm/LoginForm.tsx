import React, { FormEventHandler, ChangeEvent, useContext } from 'react'

import './loginForm.css'

import Input from '@/components/atoms/input/Input'
import useSendLoginForm from './hooks/useSendLoginForm'
import { LoginFormProps, LoginFormParams } from './LoginFormProps'
import Button from '@/components/atoms/button/Button'
import InputPassword from '@/components/atoms/inputPassword/InputPassword'
import Alert from '@/components/molecules/alert/Alert'
import getLanguage from '@/models/i18n'

const formInit: LoginFormParams = {
  username: '',
  password: '',
}

const LoginForm = ({lng, onChangeView}: LoginFormProps) => {
  const {
    onSubmit,
    onStatus,
    error,
    formState, 
    onInput, 
    onCheck, 
    onDisableButton, 
    buttonState
  } = useSendLoginForm(lng,formInit)
  const translate = getLanguage(lng)

  return (
    <div className="login-form">
      <form onSubmit={onSubmit}>
        <div className="login-form__content">
          {
            error.status && <Alert {...error} onStatus={onStatus} fixed />
          }
          <div className="login-form__row">
            <div className="login-form__header">
              <p className="login-form__header-action">{translate.LABEL.REGISTER_TEXT} <a href={`/${lng}/register`}>{translate.LABEL.REGISTER_LINK}</a></p>
              <h3 className="login-form__header-subtitle">{translate.LOGIN.FORM_SUBTITLE}</h3>
              <h2 className="login-form__header-title">{translate.LOGIN.FORM_TITLE}</h2>
            </div>
            <div className="login-form__group">
              <Input
                name="username"
                onChange={onInput}
                type="text"
                label={translate.LABEL.USERNAME}
                placeholder="juan@mail.com o 234535234..."
                size="auto"
                value={formState.username}
                border={1}
                borderRadius={4}
                borderColor="#a8a6a6"
                color="#000"
              />
            </div>
            <div className="login-form__group">
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
            <div className="login-form__group">
              <Button
                bgStyle="primary"
                size="auto"
                textSize={16}
                borderRadius={5}
                disable={buttonState}
              >{translate.LABEL.LOGIN_BTN}</Button>
            </div>
            <div className="login-form__group login-form__group--last">
              <a type="button" className="login-form__link" onClick={(e) => onChangeView('Forgot')}>
                {translate.LABEL.FORGOT_PASSWORD}
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm