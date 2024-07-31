import { customRequest } from '@/helpers/customRequest'
import { ContactParams } from '../models/ContactParams'
import { Lead } from '../models/Lead'
import { apis } from './apis'

const HttpContact = () => {

  const contact = async (contact: ContactParams) =>{
    const url: string = apis.contact
    const resp = await customRequest({
      url,
      method: 'POST',
      body: JSON.stringify(contact)
    })
    const lead: Lead | undefined = resp.data as Lead
    return {
      lead,
      status: resp.status
    }
  }

  return {
    contact,
  }
}

export default HttpContact
