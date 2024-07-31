import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Social Push",
  description: "",
}

// components, interfaces, types and functions

import { SearchParams } from '@/models/interfaces/ParamsProps'
import CartView from './presentation/organism/cartView/CartView'

const CartPage = ({params: {lng} }: SearchParams) => {
  return (
    <CartView lng={lng} />
  )
}

export default CartPage