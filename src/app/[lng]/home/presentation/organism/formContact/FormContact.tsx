import React, { FormEventHandler, ChangeEvent, useState, useContext } from 'react'

import './formContact.css'

import Input from '@/components/atoms/input/Input'
import { FormContactParams, FormContactProps } from './FormContactProps'
import Textarea from '@/components/atoms/textarea/Textarea'
import Button from '@/components/atoms/button/Button'
import Checkbox from '@/components/atoms/checkbox/Checkbox'
import Alert from '@/components/molecules/alert/Alert'
import useSendForm from './hooks/useSendForm'
import { SiteContext } from '@/context/SiteContext'
import getLanguage from '@/models/i18n'


const formInit: FormContactParams = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  message: '',
  country: '',
  code_country: '',
  ip: '',
  policies: false
}

const FormContact = ({lng}: FormContactProps) => {
  const {
    onSubmit,
    onStatus,
    error,
    formState, 
    onInput, 
    onCheck, 
    onDisableButton, 
    buttonState
  } = useSendForm(lng, formInit)
  const translate = getLanguage(lng)

  return (
    <div className="form-contact">
      <form onSubmit={onSubmit}>
        <div className="form-contact__content">
          {
            error.status && <Alert {...error} onStatus={onStatus} fixed />
          }
          <div className="form-contact__row">
            <div className="form-contact__group form-contact__group-md">
              <Input
                name="first_name"
                onChange={onInput}
                type="text"
                label={translate.LABEL.FIRST_NAME}
                placeholder={translate.LABEL.FIRST_NAME}
                size="auto"
                value={formState.first_name}
              />
            </div>
            <div className="form-contact__group form-contact__group-md">
              <Input
                name="last_name"
                onChange={onInput}
                type="text"
                label={translate.LABEL.LAST_NAME}
                placeholder={translate.LABEL.LAST_NAME}
                size="auto"
                value={formState.last_name}
              />
            </div>
            <div className="form-contact__group">
              <Input
                name="email"
                onChange={onInput}
                type="email"
                label={translate.LABEL.EMAIL}
                placeholder="juan@mail.com"
                size="auto"
                value={formState.email}
              />
            </div>
            <div className="form-contact__group">
              <Input
                name="phone_number"
                onChange={onInput}
                type="number"
                label={translate.LABEL.PHONE_NUMBER}
                placeholder="5556 65 55"
                size="auto"
                value={formState.phone_number}
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
            <div className="form-contact__group">
              <Textarea
                name="message"
                onChange={onInput}
                label={translate.LABEL.MESSAGE}
                placeholder={translate.LABEL.WRITE_HERE}
                size="auto"
                value={formState.message}
              />
            </div>
            <div className="form-contact__group form-contact__group--full">
              <Checkbox
                name="policies"
                onChange={onCheck}
                label={translate.LABEL.TERMS_TEXT}
                size={18}
                colorActive="#706FE5"
                color="#A8A6A6"
                checked={formState.policies !== undefined ? formState.policies : false}
              />
            </div>
            <div className="form-contact__group form-contact__group--last">
              <Button
                bgStyle="primary"
                size="auto"
                textSize={18}
                disable={buttonState || !formState.policies ? true : false}
              >{translate.LABEL.SEND_BTN}</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormContact