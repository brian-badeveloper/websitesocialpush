import React, { useState } from 'react'

import { LoginStateType } from './LoginViewProps'

const useLoginView = () => {

  const [view, setView] = useState<LoginStateType>('Login')
  const [email, setEmail] = useState<string>('')
  const [otp, setOtp] = useState<string|number>('')

  const onChangeView = (view: LoginStateType) => {
    setView(view)
  }

  const onChangeEmail = (email: string) => {
    setEmail(email)
  }

  const onChangeOtp = (otp: string|number) => {
    setOtp(otp)
  }

  return {
    view,
    onChangeView,
    email,
    onChangeEmail,
    otp,
    onChangeOtp
  }
}

export default useLoginView
