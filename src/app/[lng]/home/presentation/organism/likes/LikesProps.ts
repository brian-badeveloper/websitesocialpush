import { LanguageParams } from "@/models/interfaces/LanguageProps";
import { LikeItemProps } from "../likeItem/LikeItemProps";

export interface LikesProps extends LanguageParams{
  title: string
  text: string
  dataCards: LikeItemProps[]
}
