import { useContext, useEffect } from 'react'
import { SiteContext } from '@/context/SiteContext'
import { PlanItemProps } from './PlanItemProps'
import getLanguage, { LanguagesType } from '@/models/i18n'

const usePlanItem = (lng: LanguagesType, planItem: PlanItemProps) => {
  const { addCart, onAlert, onAlertStatus } = useContext(SiteContext)
  const translate = getLanguage(lng)
  const language = lng

  useEffect(() => {
    onAlertStatus(false)
  },[lng])

  const onAddProduct = () => {
    addCart({
      id: planItem.id ?? '', 
      name: planItem.name ?? '',
      name_social: planItem.config.name_social,
      i18n: planItem.i18n,
      price: planItem.config.price,
      subtotal: planItem.config.price,
      quantity: 1
    })
    onAlert({status: true, messages: [translate.MESSAGE.ADD_PRODUCT], type: 'success'})
  }
  
  return {
    language,
    onAddProduct,
    translate
  }
}

export default usePlanItem