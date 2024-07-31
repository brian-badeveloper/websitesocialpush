import { LanguageParams } from "@/models/interfaces/LanguageProps";
import { LikeItemProps } from "../likeItem/LikeItemProps";

export interface LikeItemsProps extends LanguageParams {
  dataCards: LikeItemProps[]
}

