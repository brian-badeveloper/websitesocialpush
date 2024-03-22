import { customRequest } from '@/helpers/customRequest'
import { apis } from './apis'
import { Country } from '../models/interfaces/Countries'

const httpCountry = async () => {
  const url: string = apis.getCountry
  const resp = await customRequest({
    url
  })

  return {
    data: castAnyToCountry(resp.data),
    status: resp.status
  }
}

const castAnyToCountry = (data: any): Country => {
  const { location: { country: countryApi } } = data

  return {
    name: countryApi.name,
    prefix: countryApi.calling_code,
    prefixWithoutMore: '+' + countryApi.calling_code,
    code: countryApi.code,
    flag: {
      emoji: countryApi.flag.wikimedia,
      emoji_circle: countryApi.flag.emojitwo,
      emoji_border_circular : countryApi.flag.twemoji
    }
  }
}

export default httpCountry
