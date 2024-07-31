import { useContext, useEffect } from 'react'
import { SiteContext } from '@/context/SiteContext'
import { LikeItemProps } from './LikeItemProps'
import getLanguage, { LanguagesType } from '@/models/i18n'

const useLikeItem = (lng: LanguagesType, likeItem: LikeItemProps) => {
  const { addCart, onAlert, onAlertStatus } = useContext(SiteContext)
  const translate = getLanguage(lng)
  const language = lng

  useEffect(() => {
    onAlertStatus(false)
  },[lng])

  const onAddProduct = () => {
    addCart({
      id: likeItem.id ?? '', 
      name: likeItem.name ?? '',
      name_social: likeItem.config.name_social,
      i18n: likeItem.i18n,
      price: likeItem.config.price,
      subtotal: likeItem.config.price,
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

export default useLikeItem