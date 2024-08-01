'use client'
import { FormEventHandler, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { ErrorMessageForm, MessageFormParams } from '../MessageFormProps'
import { useMessageForm } from './useMessageForm'
import { CONTACT_FORM_PARAMS } from '@/models/schemas/validateForm'
import { Errors } from '@/helpers/validateForm'
import { SiteContext } from '@/context/SiteContext'
import { labelForm } from '@/models/interfaces/ValidateForm'
import getLanguage, { LanguagesType } from '@/models/i18n'


const useSendMessageForm = (lng: LanguagesType, initialForm: MessageFormParams = {}) => {
  const [error, setError] = useState<ErrorMessageForm>({
    status: false, 
    messages: [], 
    type: 'danger'
  })
  const {
    formState, 
    onInput, 
    onCheck, 
    onDisableButton, 
    buttonState,
    onReset
  } = useMessageForm(initialForm)
  const { login } = useContext(SiteContext)
  const translate = getLanguage(lng)
  const router = useRouter()

  useEffect(() => {
    onStatus(false)
  },[lng])

  const translateParams = () => {
    for (let i = 0; i < CONTACT_FORM_PARAMS.length; i++) {
      const name = CONTACT_FORM_PARAMS[i].name
      const label: labelForm = translate.LABEL
      if (name.toUpperCase() in translate.LABEL) {
        CONTACT_FORM_PARAMS[i].placeholder = label[name.toUpperCase()] as string
      }
    }
  }

  const onSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    translateParams()

    let messages = Errors({
      params: CONTACT_FORM_PARAMS, 
      data: {...formState},
      lang: lng
    })

    onDisableButton(true)

    if(messages.length > 0) {
      setError({status: true, messages, type: 'danger'})
      onDisableButton()  
    } else {
      setError({status: false, messages: [], type: 'danger'})
      onDisableButton()
      console.log(formState)

      setTimeout(() => {
        setError({ status: true, messages: [translate.MESSAGE.CONTACT_SUCCESS], type: 'success' })
        onReset()
      }, 2000);      
    }
  }

  const onStatus = (status: boolean) => {
    let value = { ...error }
    value.status = status
    setError(value)
  }

  return {
    onSubmit,
    onStatus,
    error,
    ...formState, 
    formState, 
    onInput, 
    onCheck, 
    onDisableButton, 
    buttonState
  }
}

export default useSendMessageForm