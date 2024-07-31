import { useContext } from 'react'
import { SiteContext } from '@/context/SiteContext'
import { FollowerItemCustomProps } from '../followerItemCustom/FollowerItemCustomProps'

const useFollowerItems = () => {

  const { network, getAllPlansByNetworkAndType } = useContext(SiteContext)
  const followerData:FollowerItemCustomProps[] = getAllPlansByNetworkAndType('Customized','Follower') as FollowerItemCustomProps[]

  const follower:FollowerItemCustomProps = {
    id: "FollowerCustom",   
    name: "CUSTOMIZED PLAN",
    description: "",
    type: "Follower",
    price: 0,
    config: {
      type: "Follower",
      priority: 1,
      name_social: network,
      price: 0,
      symbol: "$",
      currency: "USD",
      value_min: 260
    },
    i18n: {
      en: {
        name: "CUSTOMIZED PLAN",
        scope: "FLC",
        title: "Customized Plan",
        text: "One-time payment",
        subText: "Followers",
        type_time: "",
      },
      es: {
        name: "PLAN PERSONALIZADO",
        scope: "FLC",
        title: "Plan Personalizado",
        text: "Pago único",
        subText: "Seguidores",
        type_time: "",
      }
    }
  }

  const followerNew:FollowerItemCustomProps = followerData && followerData[0] ? {
    ...followerData[0],
    config: {
      ...followerData[0].config,
      name_social: network
    }
  } : {...follower}

  const customProps: FollowerItemCustomProps = followerData ? followerNew : follower

  return {
    customProps
  }
}

export default useFollowerItems