import { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import { Product } from "@/context/cartReducerProps";
import getLanguage, { LanguagesType } from "@/models/i18n";

const useHistoricTableItem = (lng: LanguagesType, product: Product) => {

  const { cartState, addCart, onAlert } = useContext(SiteContext)
  const translate = getLanguage(lng)
  const language = lng

  const format = (num:number) => {
    const nf = new Intl.NumberFormat("en-US", {style: 'currency', currency: 'USD'});
    return !Number.isNaN(nf.format(num)) ? nf.format(num) : num;
  }

  const onAddProduct = () => {
    addCart({
      id: product.id ?? '', 
      name: product.name ?? '',
      name_social: product.name_social,
      i18n: product.i18n,
      price: product.price,
      subtotal: product.price,
      quantity: 1
    })
    onAlert({status: true, messages: [translate.MESSAGE.ADD_PRODUCT], type: 'success'})
  }

  return {
    language,
    format,
    cartState,
    onAddProduct,
    translate
  }
}

export default useHistoricTableItem