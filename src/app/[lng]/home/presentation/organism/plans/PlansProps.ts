import { LanguageParams } from "@/models/interfaces/LanguageProps";
import { PlanItemProps } from "../planItem/PlanItemProps";

export interface PlansProps extends LanguageParams {
  title: string
  text: string
  dataCards: PlanItemProps[]
}
