import { LanguageParams } from "@/models/interfaces/LanguageProps"
import { Plan } from "@/models/interfaces/Plan"

export interface PackageItemsDashboardProps extends LanguageParams {
  dataCards: Plan[]
}

