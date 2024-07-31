import { FormEventHandler, useContext, useEffect, useState } from 'react'

import { ErrorLoginOTP, LoginOTPProps } from '../LoginOTPProps'
import { FORGOT_FORM_PARAMS } from '@/models/schemas/validateForm'
import { Errors } from '@/helpers/validateForm'
import { SiteContext } from '@/context/SiteContext'
import { labelForm } from '@/models/interfaces/ValidateForm'
import { ValidateCodeParams } from '@/app/[lng]/login/domain/models/ValidateCodeParams'
import HttpAuth from '@/app/[lng]/login/domain/services/HttpAuth'
import { ForgotParams } from '@/app/[lng]/login/domain/models/ForgotParams'
import getLanguage from '@/models/i18n'

const useSendForm = ({lng, email, onChangeView, onChangeOtp}: LoginOTPProps) => {
  const [error, setError] = useState<ErrorLoginOTP>({
    status: false, 
    messages: [], 
    type: 'danger'
  })

  const { onAlert, onAlertStatus } = useContext(SiteContext)
  const translate = getLanguage(lng)

  useEffect(() => {
    onStatus(false)
  },[lng])


  const onSubmit = async (code: string) => {

    if (code.length === 6) {

      setError({ status: false, messages: [], type: 'danger' })
      onAlertStatus(false)
              
      onAlert({ status: true, messages: [
        translate.MESSAGE.VALID_AWAIT
      ], type: 'info' })
      
      const params: ValidateCodeParams = {
        email,
        otp: code
      } as ValidateCodeParams

      const { validCode: codeAuth } = HttpAuth()

      codeAuth(params)
      .then(data => {
          if (!data.codePass.isValid) {
            return onAlert({ status: true, messages: [
              translate.MESSAGE.OTP_NO_VALID
            ], type: 'error' })
          }

          onAlert({ status: true, messages: [
            translate.MESSAGE.OTP_SUCCESS
          ], type: 'success' })

          setTimeout(() => {
            onChangeView('Password')
            onChangeOtp(code)
          }, 2000)
      })
      .catch(error => {
        setError({ status: true, messages: [
          translate.MESSAGE.OTP_ERROR
        ], type: 'danger' })
      })
    }
  }

  const regenerateCode = () => {
    const params = {email: email} as ForgotParams
    const { forgot: forgotAuth } = HttpAuth()

    setError({ status: false, messages: [], type: 'danger' })
    onAlertStatus(false)

    setError({ status: true, messages: [
      translate.MESSAGE.VALID_AWAIT
    ], type: 'info' })

    forgotAuth(params)
      .then(data => {
        setTimeout(() => {
          setError({ status: true, messages: [
            translate.MESSAGE.OTP_SEND
          ], type: 'success' })
          onChangeOtp(data.forgotPass.otp ?? '')
          console.log(data.forgotPass?.otp)
        }, 2500)
      })
      .catch(error => {
        setError({ status: true, messages: [
          translate.MESSAGE.OTP_NO_SEND
        ], type: 'danger' })
      })
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
    regenerateCode
  }
}

export default useSendForm