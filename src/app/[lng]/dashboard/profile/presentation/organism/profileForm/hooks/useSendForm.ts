import { FormEventHandler, useContext, useEffect, useState } from 'react'

import { ErrorFormProfile, ProfileFormParams } from '../ProfileFormProps'
import { useProfileForm } from './useProfileForm'
import { CONTACT_FORM_PARAMS } from '@/models/schemas/validateForm'
import { Errors } from '@/helpers/validateForm'
import { SiteContext } from '@/context/SiteContext'
import { labelForm } from '@/models/interfaces/ValidateForm'
import { nameUser } from '@/helpers/nameUser'
import { Profile } from '../../../../domain/models/Profile'
import HttpProfile from '../../../../domain/services/HttpProfile'
import getLanguage, { LanguagesType } from '@/models/i18n'

const useSendForm = (lng: LanguagesType, initialForm: ProfileFormParams = {}) => {
  const [error, setError] = useState<ErrorFormProfile>({
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
  } = useProfileForm(initialForm)
  const { getUser, login } = useContext(SiteContext)
  const translate = getLanguage(lng)
  
  useEffect(() => {
    onStatus(false)
  },[lng])
  
  useEffect(() => {
    initializeForm()
  },[])

  const initializeForm = () => {
    const data = getUser()

    onUpdateState({
      ...formState, 
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email
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

  const onSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
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

      const params: Profile = {
        name: `${formState.first_name} ${formState.last_name}`,
        firstName: formState.first_name ?? '',
        lastName: formState.last_name ?? '',
        email: formState.email
      }

      const { update: updateProfile } = HttpProfile()
      const user = getUser()

      updateProfile(params, user.id)
      .then(data => {
        login({
          name: data.profile.name ?? '',
          firstName: data.profile.firstName ?? '',
          lastName: data.profile.lastName ?? '',
          tpId: data.profile.tpId ?? '',
          email: data.profile.email ?? '',
          token: user.token
        })
          
        onUpdateState({
          ...formState, 
          first_name: data.profile.firstName ?? '',
          last_name: data.profile.lastName ?? '',
          email: data.profile.email
        })
  
        setError({ status: true, messages: [translate.MESSAGE.UPDATED_SUCCESS], type: 'success' })
      })
      .catch(error => {
        setError({status: true, messages: [
          translate.MESSAGE.SAVED_FAILED
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