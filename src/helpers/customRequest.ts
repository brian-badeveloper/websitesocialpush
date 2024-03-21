import axios from 'axios'
import { ErrorRequest } from '@/infraestructure/errors/ErrorRequest'
import { getAuthorizationHeader } from './getAuthorizationHeader'
import { ErrorConnection } from '@/infraestructure/errors/ErrorConnection'
import { HttpRequest } from '@/models/interfaces/HttpRequest'
import { HttpResponse } from '@/models/interfaces/HttpResponse'

export const customRequest = ({ url, body, method, token, webBuilderApiKey }: HttpRequest): Promise<HttpResponse> => {
  const authorization = token ? { Authorization: `Bearer ${token}` } : getAuthorizationHeader()
  method = method ?? 'GET'
  const config = {
    method: method,
    url: url,
    headers: {
      ...authorization,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'WEBPAGES-BUILDER-API-KEY': webBuilderApiKey
    },
    data: body
  }
  return axios(config).then<HttpResponse>(resp => {
    let response: HttpResponse = { status: resp.status, data: resp?.data}
    return response
  }).catch((err: any) => {
    if (err.code === 'ECONNREFUSED' || err.code === 'ERR_NETWORK') {
      throw new ErrorConnection(err.message)
    } else {
      const bodyResponse = err.response.data
      let msgErrors: string[] = []
      if (typeof bodyResponse.message === 'object') {
        msgErrors = bodyResponse.message
      } else {
        msgErrors = [bodyResponse.message]
      }
      throw new ErrorRequest(err.response.status, msgErrors)
    }
  })
}
