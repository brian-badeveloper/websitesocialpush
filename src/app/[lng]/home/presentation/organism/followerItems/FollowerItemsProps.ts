import { LanguageParams } from "@/models/interfaces/LanguageProps";
import { FollowerItemProps } from "../followerItem/FollowerItemProps";

export interface FollowerItemsProps extends LanguageParams {
  dataCards: FollowerItemProps[],
  show: boolean
}

