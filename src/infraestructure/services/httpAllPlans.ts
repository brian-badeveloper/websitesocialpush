import { Plan } from "@/models/interfaces/Plan";
import { allPlans } from "./data/allPlans"

export const getAll = () => {
  return allPlans;
}

export const getAllByNetwork = (network:string) => {
  return allPlans.filter((item) => item.config.name_social === network);
}

export const getAllByNetworkAndType = (network:string,type:string) => {
  return allPlans.filter((item) => item.config.name_social === network && item.type === type);
}

export const getAllByFeatures = (quantity:number = 1, type:string = '') => {
  if (type && type !== '') {
    const data:Plan[] = allPlans.filter(item => item.type === type) as Plan[]
    const plans:Plan[] = []
    data.forEach((item,key) => {
      if (key + 1 <= quantity) {
        plans.push(item)
      }
    })

    return plans
  }

  const plans:Plan[] = []
  allPlans.forEach((item,key) => {
    if (plans.filter((s) => s.type === item.type).length < quantity) {
      plans.push(item as Plan)
    }
  })

  return plans
}