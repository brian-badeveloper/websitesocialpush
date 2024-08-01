import React, { FormEventHandler, ChangeEvent, useContext } from 'react'

import './messageForm.css'

import Input from '@/components/atoms/input/Input'
import useSendMessageForm from './hooks/useSendMessageForm'
import { MessageFormProps, MessageFormParams } from './MessageFormProps'
import Button from '@/components/atoms/button/Button'
import InputPassword from '@/components/atoms/inputPassword/InputPassword'
import Alert from '@/components/molecules/alert/Alert'
import Textarea from '@/components/atoms/textarea/Textarea'
import Checkbox from '@/components/atoms/checkbox/Checkbox'
import getLanguage from '@/models/i18n'

const formInit: MessageFormParams = {
  message: '',
  policies: false
}

const MessageForm = ({lng}:MessageFormProps) => {

  const {
    onSubmit,
    onStatus,
    error,
    formState, 
    onInput, 
    onCheck, 
    onDisableButton, 
    buttonState
  } = useSendMessageForm(lng,formInit)
  const translate = getLanguage(lng)

  return (
    <div className="message-form">
      <form onSubmit={onSubmit}>
        <div className="message-form__content">
          {
            error.status && <Alert {...error} onStatus={onStatus} fixed />
          }
          <div className="message-form__row">
            <div className="message-form__header">
              <h3 className="message-form__header-subtitle">{translate.DASHBOARD.PROFILE_SUBTITLE}</h3>
              <h2 className="message-form__header-title">{translate.DASHBOARD.PROFILE_TITLE}</h2>
            </div>
            <div className="message-form__group">
              <Textarea
                name="message"
                onChange={onInput}
                label={translate.LABEL.MESSAGE}
                placeholder={translate.LABEL.WRITE_HERE}
                size="auto"
                value={formState.message}
              />
            </div>
            <div className="message-form__group">
              <Checkbox
                name="policies"
                onChange={onCheck}
                label={translate.LABEL.TERMS_TEXT}
                size={16}
                colorActive="#706FE5"
                color="#A8A6A6"
                checked={formState.policies !== undefined ? formState.policies : false}
              />
            </div>
            <div className="message-form__group message-form__group--last">
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

export default MessageForm