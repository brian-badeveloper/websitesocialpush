'use client'
import { FormEventHandler, useContext, useEffect, useState } from 'react'

import { ErrorLoginForgot, LoginForgotParams, useLoginForgotProps } from '../LoginForgotProps'
import { useLoginForgot } from './useLoginForgot'
import { FORGOT_FORM_PARAMS } from '@/models/schemas/validateForm'
import { Errors } from '@/helpers/validateForm'
import { SiteContext } from '@/context/SiteContext'
import { labelForm } from '@/models/interfaces/ValidateForm'
import { ForgotParams } from '@/app/[lng]/login/domain/models/ForgotParams'
import HttpAuth from '@/app/[lng]/login/domain/services/HttpAuth'
import getLanguage from '@/models/i18n'

const useSendForm = ({lng, initialForm = {}, onChangeEmail, onChangeView} : useLoginForgotProps) => {
  const [error, setError] = useState<ErrorLoginForgot>({
    status: false, 
    messages: [], 
    type: 'danger'
  })
  const { 
    formState, 
    onInput, 
    onCheck, 
    onDisableButton,
    onReset,
    buttonState
  } = useLoginForgot(initialForm)
  const { onAlert, onAlertStatus } = useContext(SiteContext)
  const translate = getLanguage(lng)

  useEffect(() => {
    onStatus(false)
  },[lng])

  const translateParams = () => {
    for (let i = 0; i < FORGOT_FORM_PARAMS.length; i++) {
      const name = FORGOT_FORM_PARAMS[i].name
      const label: labelForm = translate.LABEL
      if (name.toUpperCase() in translate.LABEL) {
        FORGOT_FORM_PARAMS[i].placeholder = label[name.toUpperCase()] as string
      }
    }
  }

  const onSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    translateParams()

    let messages = Errors({
      params: FORGOT_FORM_PARAMS, 
      data: {...formState},
      lang: lng
    })

    onDisableButton(true)

    if(messages.length > 0) {
      setError({status: true, messages, type: 'danger'})
      onAlertStatus(false)
      onDisableButton()
    
    } else {
      setError({status: false, messages: [], type: 'danger'})
      onAlertStatus(false)
      onDisableButton()

      onAlert({ status: true, messages: [
        translate.MESSAGE.VALID_AWAIT
      ], type: 'info' })

      const params: ForgotParams = {
        email: formState.email ?? ''
      }

      const { forgot: forgotAuth } = HttpAuth()

      forgotAuth(params)
      .then(data => {
          onAlert({status: true, messages: [translate.MESSAGE.FORGOT_SUCCES], type: 'success'})

        setTimeout(() => {
          onChangeEmail(formState.email ?? '')
          onChangeView('OTP')
          onReset()
          console.log(data.forgotPass?.otp)
        },2000)
      })
      .catch(error => {
        onAlert({status: true, messages: [translate.MESSAGE.FORGOT_ERROR], type: 'danger'})
        onDisableButton()
      })
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

export default useSendForm