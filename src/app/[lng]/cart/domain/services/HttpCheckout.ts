import { customRequest } from '@/helpers/customRequest'
import { CheckoutParams, CheckoutResponse } from '../models/CheckoutParams'
import { apis } from './apis'
import { apiKeyWebBuilder } from '@/helpers/rootServer'

const HttpCheckout = () => {

  const checkout = async (cart: CheckoutParams) =>{
    const url: string = apis.checkout
    const resp = await customRequest({
      url,
      body: JSON.stringify(cart),
      method: 'POST',
      webBuilderApiKey: apiKeyWebBuilder
    })
    const response: CheckoutResponse | undefined = resp.data.data as CheckoutResponse
    return {
      response,
      status: resp.status
    }
  }

  return {
    checkout
  }
}

export default HttpCheckout
