import { LanguageParams } from "@/models/interfaces/LanguageProps";
import { FollowerItemProps } from "../followerItem/FollowerItemProps";

export interface FollowersProps extends LanguageParams {
  title: string
  text: string
  textTwo: string
  textBtn: string
  textBtnActive: string
  dataCards: FollowerItemProps[]
}
