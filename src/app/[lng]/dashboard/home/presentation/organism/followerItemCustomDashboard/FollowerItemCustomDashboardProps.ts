import { LanguageParams } from "@/models/interfaces/LanguageProps"
import { BackgroundType } from "@/models/types/BackgroundType"
import { NetworkType } from "@/models/types/NetworkType"

export interface FollowerItemCustomDashboardParams extends LanguageParams {
  item: FollowerItemCustomDashboardProps
}

export interface FollowerItemCustomDashboardProps {
  senior?: boolean
  stars?: number
  id: string | null
  name?: string
  description: string
  type: 'Follower'
  price: number
  config: {
    type: 'Follower'
    priority: number
    name_social: NetworkType | 'Customized'
    price: number
    symbol: string
    currency: string
    value_min?: number
  }
  i18n: {
    en: {
      name?: string
      scope: string
      title: string
      text?: string
      subText?: string
      type_time?: string
    }
    es: {
      name?: string
      scope: string
      title: string
      text?: string
      subText?: string
      type_time?: string
    }
  }
}

export type FollowerItemCustomInputDashboard = number | string