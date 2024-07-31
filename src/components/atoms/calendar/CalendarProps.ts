import { LanguagesType } from "@/models/i18n"
import { BackgroundType } from "@/models/types/BackgroundType"
import { SizeType } from "@/models/types/SizeType"

export interface CalendarProps {
  date?: string
  language?: LanguagesType
  bgStyle?: BackgroundType
  size?: SizeType
  textSize?: number
  disable?: boolean
}
