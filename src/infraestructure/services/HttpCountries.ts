import { customRequest } from '@/helpers/customRequest'
import { apis } from '../apis'
import { Countries } from '@/infraestructure/interfaces/Countries'

const httpCountries = async () => {
  const url: string = apis.getCountries
  const resp = await customRequest({
    url
  })

  return {
    data: resp.data.data?.map((item: any ) => castAnyToCountries(item)) as Countries[],
    status: resp.status
  }
}

const castAnyToCountries = (data: any): Countries => {
  return {
    name: data.name,
    dialCode: data.dialCode,
    isoCode: data.isoCode,
    flag: data.flag
  }
}

export default httpCountries
