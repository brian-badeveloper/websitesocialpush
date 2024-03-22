import React, { FormEventHandler, useState, useEffect } from 'react'

import { ErrorFormContact, FormContactParams } from '../FormContactProps'
import { useFormContact } from './useFormContact'
import { CONTACT_FORM_PARAMS } from '@/models/schemas/validateForm'
import { Errors } from '@/helpers/validateForm'
import getLanguage, { LanguagesType } from '@/models/i18n'
import { labelForm } from '@/models/interfaces/ValidateForm'
import { ContactParams } from '@/infraestructure/interfaces/ContactParams' 
import httpContact from '@/infraestructure/services/HttpContact' 
import { COUNTRY } from '@/components/atoms/inputPhonePicker/domain/models/schemas/country'
import { Country } from '@/components/atoms/inputPhonePicker/domain/models/interfaces/Countries'
import httpCountry from '@/components/atoms/inputPhonePicker/domain/services/HttpCountry'

const useSendForm = (
  initialForm: FormContactParams = {},
  lang: LanguagesType
) => {
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
    buttonState,
    onReset,
    onUpdateState
  } = useFormContact(initialForm)
  const translation = getLanguage(lang)

  useEffect(() => {
    onStatus(false)
  },[lang])

  useEffect(() => {
    getCountry()
  }, [])

  const translateParams = () => {
    for (let i = 0; i < CONTACT_FORM_PARAMS.length; i++) {
      const name = CONTACT_FORM_PARAMS[i].name
      const label: labelForm = translation.FORM
      if (name.toUpperCase() in translation.FORM) {
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
      lang
    })

    onDisableButton(true)

    if(messages.length > 0) {
      setError({ status: true, messages, type: 'danger' })
      onDisableButton()
    
    } else {
      setError({ status: false, messages: [], type: 'danger' })
              
      const params: ContactParams = {
        email: formState.email,
        name: `${formState.first_name} ${formState.last_name}`,
        phone: formState.phone_number,
        code_number: formState.code_number
      } as ContactParams

      console.log(params, formState)

      setTimeout(() => {
        setError({ status: true, messages: [
          translation.MESSAGE.CONTACT_SUCCESS
        ], type: 'success' })
        onDisableButton()
        onChageCountry('','')
        onReset()
      }, 2000);
      
      // httpContact(params)
      // .then(data => {
      //   setError({ status: true, messages: [
      //     translation.MESSAGE.CONTACT_SUCCESS
      //   ], type: 'success' })
      //   onDisableButton()
      //   onChageCountry('','')
      //   onReset()
      // })
      // .catch(error => {
      //   setError({ status: true, messages: [
      //     translation.MESSAGE.CONTACT_ERROR
      //   ], type: 'danger' })
      //   onDisableButton()
      // })
    }
  }

  const onStatus = (status: boolean) => {
    let value = { ...error }
    value.status = status
    setError(value)
  }

  const onChangeStateCountry = (prefix: string, code: string) => {
    onChageCountry(prefix, code)

    onUpdateState({
      ...formState,
      code_number: prefix,
      code_country: code
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
    country,
    onChangeStateCountry,
    countryState
  }
}

export default useSendForm