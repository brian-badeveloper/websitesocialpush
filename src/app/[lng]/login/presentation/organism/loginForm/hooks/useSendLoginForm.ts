'use client'
import { FormEventHandler, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { ErrorLoginForm, LoginFormParams } from '../LoginFormProps'
import { useLoginForm } from './useLoginForm'
import { LOGIN_FORM_PARAMS } from '@/models/schemas/validateForm'
import { Errors } from '@/helpers/validateForm'
import { SiteContext } from '@/context/SiteContext'
import { labelForm } from '@/models/interfaces/ValidateForm'
import HttpAuth from '@/app/[lng]/login/domain/services/HttpAuth'
import { LoginParams } from '@/app/[lng]/login/domain/models/LoginParams'
import sessionToken from '@/helpers/sessionToken'
import getLanguage, { LanguagesType } from '@/models/i18n'


const useSendLoginForm = (lng: LanguagesType, initialForm: LoginFormParams = {}) => {
  const [error, setError] = useState<ErrorLoginForm>({
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
  } = useLoginForm(initialForm)
  const { login, getUser, onAlertStatus } = useContext(SiteContext)
  const translate = getLanguage(lng)
  const router = useRouter()

  useEffect(() => {
    onStatus(false)
  },[lng])

   const translateParams = () => {
    for (let i = 0; i < LOGIN_FORM_PARAMS.length; i++) {
      const name = LOGIN_FORM_PARAMS[i].name
      const label: labelForm = translate.LABEL
      if (name.toUpperCase() in translate.LABEL) {
        LOGIN_FORM_PARAMS[i].placeholder = label[name.toUpperCase()] as string
      }
    }
  }

  const onSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    translateParams()

    let messages = Errors({
      params: LOGIN_FORM_PARAMS, 
      data: {...formState},
      lang: lng
    })
    const checkoutUrl = localStorage.getItem('checkout') || ''
    const redirect = checkoutUrl && typeof checkoutUrl === 'string' ? JSON.parse( checkoutUrl ) : ""

    onDisableButton(true)

    if(messages.length > 0) {
      setError({status: true, messages, type: 'danger'})
      onDisableButton()  
    } else {
      setError({status: false, messages: [], type: 'danger'})
      onDisableButton()

      setError({status: true, messages: [translate.MESSAGE.VALID_AWAIT], type: 'info'})
      
      const params: LoginParams = {
        username: formState.username ?? '',
        password: formState.password ?? ''
      }

      const { login: loginAuth } = HttpAuth()

      loginAuth(params)
      .then(data => {
        const token = data.lead.access_token
        const response = token && !sessionToken.getTokenExpired(token) ? sessionToken.decodeToken(token) : "";

        if (response) {
          onReset()

          login({
            name: response?.name,
            firstName: response?.firstName ?? '',
            lastName: response?.lastName ?? '',
            tpId: response?.tpId ?? '',
            email: response?.email,
            token
          })

          setError({status: true, messages: [translate.MESSAGE.LOGIN_SUCCESS], type: 'success'})

          return setTimeout(() => {
            localStorage.removeItem('checkout')
            router.replace(redirect ? `/${lng}${redirect}` : `/${lng}/dashboard`, {scroll: false})
          }, 2000)
        }
        
        setError({status: true, messages: [
          translate.MESSAGE.LOGIN_FAILED
        ], type: 'danger'})

      })
      .catch(error => {
        setError({status: true, messages: [
          translate.MESSAGE.LOGIN_ERROR
        ], type: 'danger'})
        onDisableButton()  
      })
    }
  }

  const onStatus = (status: boolean) => {
    let value = { ...error }
    value.status = status
    setError(value)
    onAlertStatus(false)
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

export default useSendLoginForm