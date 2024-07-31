import { customRequest } from '@/helpers/customRequest'
import { apis } from '../apis'
import { Plan } from '@/models/interfaces/Plan'
import { apiKeyWebBuilder } from '@/helpers/rootServer'

const HttpPlansSold = async () => {
  const url: string = apis.favorites
  const params = {
    url,
    webBuilderApiKey: apiKeyWebBuilder
  }
  const resp = await customRequest(params)
  const planData: Plan[] | undefined = resp.data?.data as Plan[]
  return {
    plans: planData,
    status: resp.status
  }
}

export {
  HttpPlansSold
}
