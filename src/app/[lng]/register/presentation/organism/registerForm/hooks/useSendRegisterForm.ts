'use client'
import { FormEventHandler, useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { ErrorRegisterForm, RegisterFormParams } from '../RegisterFormProps'
import { useRegisterForm } from './useRegisterForm'
import { REGISTER_FORM_PARAMS } from '@/models/schemas/validateForm'
import { Errors } from '@/helpers/validateForm'
import { SiteContext } from '@/context/SiteContext'
import { labelForm } from '@/models/interfaces/ValidateForm'
import { Country } from '@/infraestructure/interfaces/Countries'
import { COUNTRY } from '@/models/schemas/country'
import httpCountry from '@/infraestructure/services/HttpCountry'
import HttpAuth from '@/app/[lng]/login/domain/services/HttpAuth'
import { LoginParams } from '@/app/[lng]/login/domain/models/LoginParams'
import sessionToken from '@/helpers/sessionToken'
import { User } from '@/models/interfaces/User'
import HttpRegister from '@/infraestructure/services/HttpRegister'
import getLanguage, { LanguagesType } from '@/models/i18n'


const useSendRegisterForm = (lng: LanguagesType, initialForm: RegisterFormParams = {}) => {
  const [countryState, setCountryState] = useState<Country>(COUNTRY)
  const [country, setCountry] = useState<Country>(COUNTRY)
  const [error, setError] = useState<ErrorRegisterForm>({
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
    onReset,
    onUpdateState
  } = useRegisterForm(initialForm)
  const { login } = useContext(SiteContext)
  const translate = getLanguage(lng)
  const router = useRouter()

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
    for (let i = 0; i < REGISTER_FORM_PARAMS.length; i++) {
      const name = REGISTER_FORM_PARAMS[i].name
      const label: labelForm = translate.LABEL
      if (name.toUpperCase() in translate.LABEL) {
        REGISTER_FORM_PARAMS[i].placeholder = label[name.toUpperCase()] as string
      }
    }
  }

  const onSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    translateParams()

    let messages = Errors({
      params: REGISTER_FORM_PARAMS, 
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

      setError({status: true, messages: [translate.MESSAGE.VALID_AWAIT], type: 'info'})
      
      const params: User = {
        name: `${formState.first_name} ${formState.last_name}`,
        firstName: formState.first_name ?? '',
        lastName: formState.last_name ?? '',
        email: formState.email ?? '',
        ip: formState.ip ?? '',
        password: formState.password ?? '',
        country: formState.country,
        phone: formState.phone_number ?? '',
        phoneCode: formState.code_country,
        description: '',        
        config: {
          icon: 'icon-lead',
          title: 'Title Lead',
          img: 'img-lead',
          phone: formState.phone_number ?? ''
        }
      }

      const { register: registerAuth } = HttpRegister()
      
      registerAuth(params)
      .then(data => {
        const paramsAuth: LoginParams = {
          username: data.record.email,
          password: params.password ?? ''
        }

        return loginActive(paramsAuth)
      })
      .catch(error => {
        setError({status: true, messages: [
          translate.MESSAGE.REGISTER_ERROR
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
    const checkoutUrl = localStorage.getItem('checkout') || ''
    const redirect = checkoutUrl && typeof checkoutUrl === 'string' ? JSON.parse( checkoutUrl ) : ""
    
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
    buttonState
  }
}

export default useSendRegisterForm