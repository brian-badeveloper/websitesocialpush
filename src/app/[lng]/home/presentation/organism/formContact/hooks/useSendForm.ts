'use client'
import { FormEventHandler, useContext, useEffect, useState } from 'react'

import { ErrorFormContact, FormContactParams } from '../FormContactProps'
import { useFormContact } from './useFormContact'
import { CONTACT_FORM_PARAMS } from '@/models/schemas/validateForm'
import { Errors } from '@/helpers/validateForm'
import { SiteContext } from '@/context/SiteContext'
import { labelForm } from '@/models/interfaces/ValidateForm'
import { Country } from '@/infraestructure/interfaces/Countries'
import { COUNTRY } from '@/models/schemas/country'
import { User } from '@/models/interfaces/User'
import httpCountry from '@/infraestructure/services/HttpCountry'
import HttpRegister from '@/infraestructure/services/HttpRegister'
import getPasswordRandom from '@/helpers/getPasswordRandom'
import HttpAuth from '@/app/[lng]/login/domain/services/HttpAuth'
import sessionToken from '@/helpers/sessionToken'
import { LoginParams } from '@/app/[lng]/login/domain/models/LoginParams'
import { useAuthenticate } from '@/hooks/useAuthenticate'
import { NAME_COOKIE } from '@/helpers/nameCookie'
import Cookies from 'js-cookie'
import getLanguage, { LanguagesType } from '@/models/i18n'

const useSendForm = (lng: LanguagesType, initialForm: FormContactParams = {}) => {
  const [countryState, setCountryState] = useState<Country>(COUNTRY)
  const [country, setCountry] = useState<Country>(COUNTRY)
  const [error, setError] = useState<ErrorFormContact>({
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
    buttonState,
    onUpdateState
  } = useFormContact(initialForm)
  const { login } = useContext(SiteContext)
  const translate = getLanguage(lng)

  useEffect(() => {
    onStatus(false)
  },[lng])

  useEffect(() => {
    getCountry()
  }, [])

  useEffect(() => {
    initializeForm()
  },[country])

  const initializeForm = () => {
      onUpdateState({
      ...initialForm, 
      country: country.code,
      code_country: country.prefix,
      ip: country.ip ?? ''
    })
  }

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
      setError({ status: true, messages, type: 'danger' })
      onDisableButton()
    
    } else {
      setError({ status: false, messages: [], type: 'danger' })
      onDisableButton()

      setError({status: true, messages: [translate.MESSAGE.VALID_AWAIT], type: 'info'})
      
      const params: User = {
        name: `${formState.first_name} ${formState.last_name}`,
        firstName: formState.first_name ?? '',
        lastName: formState.last_name ?? '',
        email: formState.email ?? '',
        ip: formState.ip ?? '',
        password: getPasswordRandom(9),
        country: formState.country,
        description: formState.message, 
        phone: formState.phone_number ?? '',  
        phoneCode: formState.code_country,    
        config: {
          icon: 'icon-lead',
          title: 'Title Lead',
          img: 'img-lead',
          phone: formState.phone_number ?? ''
        }
      }

      const { register: registerAuth } = HttpRegister()
      const tokenAuth = Cookies.get(NAME_COOKIE)
      
      registerAuth(params)
      .then(data => {

        const paramsAuth: LoginParams = {
          username: data.record.email,
          password: params.password ?? ''
        }

        if (!tokenAuth) {
          return loginActive(paramsAuth)
        }

        setError({status: true, messages: [translate.MESSAGE.CONTACT_SUCCESS], type: 'success'})
        onChageCountry('','')
        onDisableButton()
        onReset()
        initializeForm()
        
      })
      .catch(error => {
        setError({status: true, messages: [
          translate.MESSAGE.CONTACT_ERROR
        ], type: 'danger'})
        onDisableButton()
      })
    }
  }

  const onStatus = (status: boolean) => {
    let value = { ...error }
    value.status = status
    setError(value)
  }

  const loginActive = (params: LoginParams) => {

    const { login: loginAuth } = HttpAuth()
    
    loginAuth(params)
    .then(data => {
      const token = data.lead.access_token
      const response = token && !sessionToken.getTokenExpired(token) ? sessionToken.decodeToken(token) : "";

      if (response) {
        onChageCountry('','')
        onReset()
        initializeForm()

        login({
          name: response?.name,
          firstName: response?.firstName ?? '',
          lastName: response?.lastName ?? '',
          tpId: response?.tpId ?? '',
          email: response?.email,
          token
        })

        return setError({status: true, messages: [translate.MESSAGE.CONTACT_SUCCESS_LOGIN], type: 'success'})
      }
      
      return setError({status: true, messages: [
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

  const onChangeStateCountry = (prefix: string, code: string) => {
    onChageCountry(prefix, code)

    onUpdateState({
      ...formState,
      code_country: prefix,
      country: code
    })
  }

  const onChageCountry = (prefix: string, code: string) => {
    setCountryState({
      ...countryState,
      prefix,
      code
    })
  }

  const getCountry = async () => {
    try {
      const resp = await httpCountry()
      setCountry(resp.data)
    } catch(error) {
      console.warn('Could NOT find the country')
    }
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
    buttonState,
    country
  }
}

export default useSendForm