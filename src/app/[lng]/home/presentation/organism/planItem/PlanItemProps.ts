import { BackgroundType } from "@/models/types/BackgroundType"
import { NetworkType } from "@/models/types/NetworkType"

export interface PlanItemProps {
  id: string | null
  name?: string
  description: string
  type: 'Plan'
  price: number
  config: {
    type: 'Plan'
    priority: number
    name_social: NetworkType
    price: number
    symbol: string
    currency: string
  }
  i18n: {
    en: {
      name?: string
      scope: string
      title: string
      text?: string
      subText?: string
      type_time: string    
      options: string[]
    }
    es: {
      name?: string
      scope: string
      title: string
      text?: string
      subText?: string
      type_time: string    
      options: string[]
    }
  }
}