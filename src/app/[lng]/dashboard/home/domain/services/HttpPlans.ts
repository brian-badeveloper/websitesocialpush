import { customRequest } from '@/helpers/customRequest'
import { apis } from './apis'
import { Plan } from '../models/Plan'

const HttpPlans = async () => {
  const url: string = apis.plans
  const params = {
    url,
    client: '$2b$10$6EhC6Wsk6LUCNz5g.sUzTeDCgh9.W1/8/ieRD19sMx9wyGwwPIiKS'
  }
  const resp = await customRequest(params)
  const planData: Plan[] | undefined = resp.data as Plan[]
  return {
    plans: planData,
    status: resp.status
  }
}

export default HttpPlans