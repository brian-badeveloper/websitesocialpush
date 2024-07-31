import { ProductSingle } from "@/context/cartReducerProps";
import { Plan } from "@/models/interfaces/Plan";

export interface CheckoutParams {
  name?: string
  description?: string
  type?: string
  config?: CheckoutConfigProps
}

interface CheckoutConfigProps {
  icon?: string
  title?: string
  img?: string
  user: string
  products: ProductSingle[]
}

export interface CheckoutResponse {
  config?: CheckoutConfigProps
  description?: string
  id?: string
  name?: string
  plans?: Plan[]
  type?: string
  url?: string
}

interface DinamicData {
  [x: string] : string | number | boolean
}