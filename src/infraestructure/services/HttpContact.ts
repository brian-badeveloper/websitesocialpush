import { customRequest } from '@/helpers/customRequest'
import { ContactParams } from '@/infraestructure/interfaces/ContactParams'
import { apis } from '../apis'
import { apiKeyWebBuilder } from '@/helpers/rootServer'

const httpContact = async (contact: ContactParams) =>{
  const url: string = apis.contact
  const resp = await customRequest({
    url,
    method: 'POST',
    body: JSON.stringify(contact),
    webBuilderApiKey: apiKeyWebBuilder
  })

  return {
    message: resp.data?.message,
    status: resp.status
  }
}


export default httpContact
