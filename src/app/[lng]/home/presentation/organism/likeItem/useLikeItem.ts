import { useContext, useEffect } from 'react'
import { SiteContext } from '@/context/SiteContext'
import { LikeItemProps } from './LikeItemProps'

const useLikeItem = (likeItem: LikeItemProps) => {
  const { language, getLanguages, addCart, onAlert, onAlertStatus } = useContext(SiteContext)
  const translate = getLanguages()

  useEffect(() => {
    onAlertStatus(false)
  },[language])

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