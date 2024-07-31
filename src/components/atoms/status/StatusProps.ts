import { LanguagesType } from "@/models/i18n"
import { BackgroundType } from "@/models/types/BackgroundType"
import { SizeType } from "@/models/types/SizeType"
import { StatusType } from "@/models/types/Status"

export interface StatusProps {
  status: StatusType
  size?: SizeType
  textSize?: number
  language?: LanguagesType
  disable?: boolean
}
