import { LanguageParams } from "@/models/interfaces/LanguageProps"
import { Plan } from "@/models/interfaces/Plan"

export interface PackagesDashboardProps extends LanguageParams {
  title: string
  text?: string
  dataCards: Plan[]
}
