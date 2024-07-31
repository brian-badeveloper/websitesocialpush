import { useContext } from "react";

import { FaqProps } from "@/components/molecules/faq/FaqProps";
import { SiteContext } from "@/context/SiteContext";

const useInfo = () => {

  const { getLanguages } = useContext(SiteContext)
  const translate = getLanguages()

  const faqsList:FaqProps[] = [
    {
      title: translate.HOME.FAQ_ITEM_1_TITLE,
      text: translate.HOME.FAQ_ITEM_1_TEXT,
    },
    {
      title: translate.HOME.FAQ_ITEM_2_TITLE,
      text: translate.HOME.FAQ_ITEM_2_TEXT,
    },
    {
      title: translate.HOME.FAQ_ITEM_3_TITLE,
      text: translate.HOME.FAQ_ITEM_3_TEXT,
    },
    {
      title: translate.HOME.FAQ_ITEM_4_TITLE,
      text: translate.HOME.FAQ_ITEM_4_TEXT,
    },
    {
      title: translate.HOME.FAQ_ITEM_5_TITLE,
      text: translate.HOME.FAQ_ITEM_5_TEXT,
    },
    {
      title: translate.HOME.FAQ_ITEM_6_TITLE,
      text: translate.HOME.FAQ_ITEM_6_TEXT,
    },
    {
      title: translate.HOME.FAQ_ITEM_7_TITLE,
      text: translate.HOME.FAQ_ITEM_7_TEXT,
    },
    {
      title: translate.HOME.FAQ_ITEM_8_TITLE,
      text: translate.HOME.FAQ_ITEM_8_TEXT,
    },
  ]

  const strategiesOptions:string[] = [
    translate.HOME.STRATEGIES_OPTION_1,
    translate.HOME.STRATEGIES_OPTION_2,
    translate.HOME.STRATEGIES_OPTION_3,
    translate.HOME.STRATEGIES_OPTION_4,
    translate.HOME.STRATEGIES_OPTION_5
  ] 

  return {
    faqsList,
    strategiesOptions
  }
}

export default useInfo
