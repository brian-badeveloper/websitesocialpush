import { customRequest } from '@/helpers/customRequest'
import { apiKeyWebBuilder } from '@/helpers/rootServer'
import { Profile, dataProfile } from '../models/Profile'
import { apis } from './apis'

const HttpProfile = () => {
  const update = async (data: Profile, id?: string) =>{
    const url: string = `${apis.update}/${id}`
    const resp = await customRequest({
      url,
      body: JSON.stringify(data),
      method: 'PATCH',
      webBuilderApiKey: apiKeyWebBuilder
    })
    const profile: dataProfile | undefined = resp.data?.data as Profile
    return {
      profile,
      status: resp.status
    }
  }

  return {
    update
  }
}

export default HttpProfile
