import { customRequest } from '@/helpers/customRequest'
import { apiKeyWebBuilder } from '@/helpers/rootServer'
import { LoginParams } from '../models/LoginParams'
import { ForgotParams, ForgotPass } from '../models/ForgotParams'
import { Lead } from '../models/Lead'
import { apis } from './apis'
import { CodePass, ValidateCodeParams } from '../models/ValidateCodeParams'
import { ResetPassword } from '../models/ResetPassword'
import axios from "axios"

const HttpAuth = () => {
  const login = async (auth: LoginParams) => {
    const url: string = apis.login
    const resp = await customRequest({
      url,
      body: JSON.stringify(auth),
      method: 'POST',
      webBuilderApiKey: apiKeyWebBuilder
    })
    const lead: Lead | undefined = resp.data.data as Lead
    return {
      lead,
      status: resp.status
    }
  }

  const forgot = async (auth: ForgotParams) => {
    const url: string = `${apis.forgot}?email=${auth.email}`
    const resp = await customRequest({
      url,
      webBuilderApiKey: apiKeyWebBuilder
    })
    const forgotPass: ForgotPass | undefined = resp.data.data as ForgotPass
    return {
      forgotPass,
      status: resp.status
    }
  }

  const validCode = async (auth: ValidateCodeParams) => {
    const url: string = `${apis.forgot}?email=${auth.email}&otp=${auth.otp}`
    const resp = await customRequest({
      url,
      webBuilderApiKey: apiKeyWebBuilder
    })
    const codePass: CodePass | undefined = resp.data.data as CodePass
    return {
      codePass,
      status: resp.status
    }
  }

  const resetPassword = async (auth: ResetPassword) => {
    const url: string = apis.resetPassword
    const resp = await customRequest({
      url,
      body: JSON.stringify(auth),
      method: 'POST',
      webBuilderApiKey: apiKeyWebBuilder
    })
    const lead: Lead | undefined = resp.data.data as Lead
    return {
      lead,
      status: resp.status
    }
  }

  return {
    login,
    forgot,
    validCode,
    resetPassword
  }
}

export default HttpAuth
