import { CartActionType } from '@/models/types/CartType'
import { CartReducerProps, CartReducerAction, Product } from './cartReducerProps'

export const cartReducer = (state:CartReducerProps, action:CartReducerAction): CartReducerProps => {
  switch (action.type) {
    case CartActionType.change:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}