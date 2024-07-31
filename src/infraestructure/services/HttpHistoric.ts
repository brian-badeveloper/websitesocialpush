import { customRequest } from '@/helpers/customRequest'
import { apis } from '../apis'
import { Product } from '@/context/cartReducerProps' 
import { apiKeyWebBuilder } from '@/helpers/rootServer'

const HttpHistoric = async (token: string) => {
  const url: string = apis.historic
  const params = {
    url,
    token,
    webBuilderApiKey: apiKeyWebBuilder
  }
  const resp = await customRequest(params)
  const historicData: Product[] | undefined = resp.data.data?.map((item: any ) => castAnyToHistoric(item)) as Product[]
  return {
    historic: historicData,
    status: resp.status
  }
}

const castAnyToHistoric = (data: any): Product => {
  return {
    id: data.id,
    name: data.name,
    name_social: data.config?.name_social,
    i18n: {
      en: {
        name: data.i18n.en.name,
        scope: data.i18n.en.scope
      },
      es: {
        name: data.i18n.es.name,
        scope: data.i18n.es.scope
      }
    },
    status: 1,
    price: data.config?.price,
    subtotal: data.config?.price,
    quantity: 1,
    date: "25/10/2023"
  }
}

export {
  HttpHistoric
}
