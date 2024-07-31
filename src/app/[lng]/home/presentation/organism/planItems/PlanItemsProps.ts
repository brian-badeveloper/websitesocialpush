import { LanguageParams } from "@/models/interfaces/LanguageProps";
import { PlanItemProps } from "../planItem/PlanItemProps";

export interface PlanItemsProps extends LanguageParams {
  dataCards: PlanItemProps[]
}

