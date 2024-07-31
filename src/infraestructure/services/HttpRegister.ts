import { customRequest } from '@/helpers/customRequest'
import { apiKeyWebBuilder } from '@/helpers/rootServer'
import { apis } from '../apis'
import { User } from '@/models/interfaces/User'

const HttpRegister = () => {
  const register = async (data: User) =>{
    const url: string = apis.register
    const resp = await customRequest({
      url,
      body: JSON.stringify(data),
      method: 'POST',
      webBuilderApiKey: apiKeyWebBuilder
    })
    const record: User | undefined = resp.data?.data as User
    return {
      record,
      status: resp.status
    }
  }

  return {
    register
  }
}

export default HttpRegister
