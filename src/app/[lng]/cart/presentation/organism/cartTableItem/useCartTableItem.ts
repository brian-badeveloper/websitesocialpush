import { useContext } from "react";
import { Product } from "@/context/cartReducerProps";
import { SiteContext } from "@/context/SiteContext";
import getLanguage, { LanguagesType } from "@/models/i18n";

const useCartTableItem = (lng: LanguagesType, product: Product) => {

  const { cartState, getProduct, updateCart, deleteCart, onAlert} = useContext(SiteContext)
  const translate = getLanguage(lng)

  const format = (num:number) => {
    const nf = new Intl.NumberFormat("en-US", {style: 'currency', currency: 'USD'});
    return !Number.isNaN(nf.format(num)) ? nf.format(num) : num;
  }

  const onUpdateProduct = (quantity: number) => {
    const productFind = getProduct({id: product.id} as Product)

    if (productFind && productFind.quantity !== quantity) {
      updateCart({
        id: product.id ?? '', 
        name: product.name ?? '',
        name_social: product.name_social,
        i18n: product.i18n,
        price: product.price,
        subtotal: product.price,
        quantity: quantity
      })
      onAlert({status: true, messages: [translate.MESSAGE.UPDATE_PRODUCT],type: 'success'})
    }
  }

  const onQuantity = (quantity: number) => {
    if (quantity < 1) {
      onAlert({status: true, messages: [translate.MESSAGE.QUANTITY_INVALID], type: 'error'})
    } else {
      onUpdateProduct(quantity)
    }
  }

  const onDeleteProduct = (id: Product) => {
    deleteCart(id)
    onAlert({status: true, messages: [translate.MESSAGE.DELETE_PRODUCT], type: 'success'})
  }

  return {
    format,
    cartState,
    onUpdateProduct,
    onQuantity,
    onDeleteProduct,
    translate
  }
}

export default useCartTableItem