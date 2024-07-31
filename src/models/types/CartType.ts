export const CartActionType = {
  change: '[Change] Change Cart',
}

const CartTypes = [CartActionType.change] as const

export type CartType = typeof CartTypes[number]