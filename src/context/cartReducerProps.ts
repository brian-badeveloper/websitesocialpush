import { ProductGlobal } from '@/models/interfaces/Product'
import { CartType } from '@/models/types/CartType'

export interface CartReducerProps {
  products: Product[]
  subtotal: number
  total: number
}

export interface CartReducerAction {
  type: CartType
  payload?: CartReducerProps
}

export interface Product extends ProductGlobal {}

export interface ProductSingle {
  id: string
  quantity: number
  price: number
}