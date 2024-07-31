import { useEffect, useState } from 'react'
import { Plan } from '@/models/interfaces/Plan' 
import { HttpPlans, HttpPlansSold } from '@/infraestructure/services' 
import { allPlans, allSold } from '@/infraestructure/services/data'

const usePlans = () => {
  const [plans, setPlans] = useState<Plan[]>([])
  const [plansSold, setPlansSold] = useState<Plan[]>([])

  const getInitPlans = () => {
    HttpPlans()
    .then(data => {
      setPlans(data.plans && data.plans.length > 0 ? [...data.plans] : [...allPlans as Plan[]])
    })
    .catch(error => {
      setPlans([...allPlans as Plan[]])
      console.log(`plans: No data has been found`)
    })
  }

  const getAllPlans = () => {
    return plans
  }
  
  const getAllPlansByNetwork = (network:string) => {
    return plans.filter((item) => item.config.name_social === network)
  }
  
  const getAllPlansByNetworkAndType = (network:string, type:string) => {
    return plans.filter((item) => item.config.name_social === network && item.type === type)
  }

  const getAllPlansByFeatures = (quantity:number = 1, type:string = '') => {
    if (type && type !== '') {
      const data:Plan[] = plans.filter(item => item.type === type) as Plan[]
      const dataPlans:Plan[] = []
      data.forEach((item,key) => {
        if (key + 1 <= quantity) {
          dataPlans.push(item)
        }
      })

      return dataPlans
    }

    const dataPlans:Plan[] = []
    plans.forEach((item,key) => {
      if (dataPlans.filter((s) => s.type === item.type).length < quantity) {
        dataPlans.push(item as Plan)
      }
    })

    return dataPlans
  }

  const getInitPlansSold = () => {
    HttpPlansSold()
    .then(data => {
      setPlansSold(data.plans && data.plans.length > 0 ? orderFavorites(data.plans) : orderFavorites(allSold as Plan[]))
    })
    .catch(error => {
      setPlansSold(orderFavorites(allSold as Plan[]))
      console.log(`plans: No data has been found`)
    })
  }

  const orderFavorites = (objPlans: Plan[] = []):Plan[] => {
    const followers = objPlans?.filter(item => item.type === 'Follower')
    const plans = objPlans?.filter(item => item.type === 'Plan')
    const likes = objPlans?.filter(item => item.type === 'Like')

    return [...followers, ...plans, ...likes]
  }

  const getPlansSold = () => {
    return plansSold
  }

  return { 
    plans,
    getInitPlans,
    getAllPlans,
    getAllPlansByNetwork,
    getAllPlansByNetworkAndType,
    getInitPlansSold,
    getPlansSold
  }
}

export default usePlans