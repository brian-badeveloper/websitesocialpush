export interface CartInputProps {
  valueInitial: CartInputType,
  onQuantity: (quantity: number) => void
}
export type CartInputType = number | string