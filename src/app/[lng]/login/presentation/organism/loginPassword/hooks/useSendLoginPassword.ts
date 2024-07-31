import { FormEventHandler, useContext, useEffect, useState } from 'react'

import { ErrorLoginPassword, LoginPasswordParams, useLoginPasswordProps } from '../LoginPasswordProps'
import { useLoginPassword } from './useLoginPassword'
import { PASSWORD_FORM_PARAMS } from '@/models/schemas/validateForm'
import { Errors } from '@/helpers/validateForm'
import { SiteContext } from '@/context/SiteContext'
import { labelForm } from '@/models/interfaces/ValidateForm'
import HttpAuth from '@/app/[lng]/login/domain/services/HttpAuth'
import { ResetPassword } from '@/app/[lng]/login/domain/models/ResetPassword'

const useSendLoginPassword = ({lng, initialForm = {}, email, onChangeView, onChangeEmail, otp, onChangeOtp}: useLoginPasswordProps) => {
  const [error, setError] = useState<ErrorLoginPassword>({
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
  } = useLoginPassword(initialForm)
  const { language, getLanguages, onAlert, onAlertStatus } = useContext(SiteContext)
  const translate = getLanguages()

  useEffect(() => {
    onStatus(false)
  },[language])

  const translateParams = () => {
    for (let i = 0; i < PASSWORD_FORM_PARAMS.length; i++) {
      const name = PASSWORD_FORM_PARAMS[i].name
      const label: labelForm = translate.LABEL
      if (name.toUpperCase() in translate.LABEL) {
        PASSWORD_FORM_PARAMS[i].placeholder = label[name.toUpperCase()] as string
      }
    }
  }

  const onSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    translateParams()

    let messages = Errors({
      params: PASSWORD_FORM_PARAMS, 
      data: {...formState},
      lang: language
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
      onAlert({status: true, messages: [translate.MESSAGE.VALID_AWAIT], type: 'info'})

      const params: ResetPassword = {
        email,
        password: formState.password ?? '',
        password2: formState.password2 ?? '',
        otp
      }

      const { resetPassword: resetAuth } = HttpAuth()

      resetAuth(params)
      .then(data => {
        onAlert({status: true, messages: [translate.MESSAGE.PASSWORD_SUCCESS], type: 'success'})
        onReset()

        setTimeout(() => {
          onChangeView('Login')
          onChangeEmail('')
          onChangeOtp('')
        },4000)
      })
      .catch(error => {
        onAlert({status: true, messages: [translate.MESSAGE.PASSWORD_FAILED], type: 'success'})
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

export default useSendLoginPassword