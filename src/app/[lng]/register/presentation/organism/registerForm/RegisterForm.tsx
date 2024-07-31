import React, { FormEventHandler, ChangeEvent, useContext } from 'react'

import './registerForm.css'

import Input from '@/components/atoms/input/Input'
import useSendRegisterForm from './hooks/useSendRegisterForm'
import { RegisterFormParams, RegisterFormProps } from './RegisterFormProps'
import Button from '@/components/atoms/button/Button'
import InputPassword from '@/components/atoms/inputPassword/InputPassword'
import Checkbox from '@/components/atoms/checkbox/Checkbox'
import Alert from '@/components/molecules/alert/Alert'
import { SiteContext } from '@/context/SiteContext'
import getLanguage from '@/models/i18n'

const formInit: RegisterFormParams = {
  first_name: '',
  last_name: '',
  email: '',
  country: '',
  code_country: '',
  ip: '',
  phone_number: '',
  password: '',
  password_confirm: '',
  policies: false
}

const RegisterForm = ({lng}: RegisterFormProps) => {

  const {
    onSubmit,
    onStatus,
    error,
    formState, 
    onInput, 
    onCheck, 
    onDisableButton, 
    buttonState
  } = useSendRegisterForm(lng, formInit)
  const translate = getLanguage(lng)

  return (
    <div className="register-form">
      <form onSubmit={onSubmit}>
        <div className="register-form__content">
          {
            error.status && <Alert {...error} onStatus={onStatus} fixed />
          }
          <div className="register-form__row">
            <div className="register-form__header">
              <h3 className="register-form__header-subtitle">{translate.REGISTER.FORM_SUBTITLE}</h3>
              <h2 className="register-form__header-title">{translate.REGISTER.FORM_TITLE}</h2>
            </div>
            <div className="register-form__group register-form__group-md">
              <Input
                name="first_name"
                onChange={onInput}
                type="text"
                label={translate.LABEL.FIRST_NAME}
                placeholder="juanito"
                size="auto"
                value={formState.first_name}
                border={1}
                borderRadius={4}
                borderColor="#a8a6a6"
                color="#000"
              />
            </div>
            <div className="register-form__group register-form__group-md">
              <Input
                name="last_name"
                onChange={onInput}
                type="text"
                label={translate.LABEL.LAST_NAME}
                placeholder="perez"
                size="auto"
                value={formState.last_name}
                border={1}
                borderRadius={4}
                borderColor="#a8a6a6"
                color="#000"
              />
            </div>
            <div className="register-form__group register-form__group-md">
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
            <div className="register-form__group register-form__group-md">
              <Input
                name="phone_number"
                onChange={onInput}
                type="number"
                label={translate.LABEL.PHONE_NUMBER}
                placeholder="5556 65 55"
                size="auto"
                value={formState.phone_number}
                border={1}
                borderRadius={4}
                borderColor="#a8a6a6"
                color="#000"
              />
              <input 
                type="hidden"
                onChange={onInput}
                name="country"
                value={formState.country}
              />
              <input 
                type="hidden"
                onChange={onInput}
                name="code_country"
                value={formState.code_country}
              />
              <input 
                type="hidden"
                onChange={onInput}
                name="ip"
                value={formState.ip}
              />
            </div>
            <div className="register-form__group">
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
            <div className="register-form__group">
              <InputPassword
                name="password_confirm"
                onChange={onInput}
                label={translate.LABEL.PASSWORD_CONFIRM}
                placeholder="*********"
                size="auto"
                value={formState.password_confirm}
                border={1}
                borderRadius={4}
                borderColor="#a8a6a6"
                color="#000"
              />
            </div>
            <div className="register-form__group">
              <Checkbox
                name="policies"
                onChange={onCheck}
                label={translate.LABEL.TERMS_ACCEPT}
                size={18}
                colorActive="#706FE5"
                color="#A8A6A6"
                colorText="#000"
                checked={formState.policies !== undefined ? formState.policies : false}
              />
            </div>
            <div className="register-form__group">
              <Button
                bgStyle="primary"
                size="auto"
                textSize={16}
                borderRadius={5}
                disable={buttonState || !formState.policies ? true : false}
              >{translate.LABEL.REGISTER_BTN}</Button>
            </div>
            <div className="register-form__group register-form__group--last">
              <p className="register-form__text">{translate.LABEL.LOGIN_TEXT} <a href={`/${lng}/login`} className="register-form__link register-form__link--normal">{translate.LABEL.LOGIN_LINK}</a></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm