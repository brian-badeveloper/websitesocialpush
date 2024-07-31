import { useContext, useEffect, useState } from 'react'
import './cartBar.css'

import Button from '@/components/atoms/button/Button'
import useCartBarItem from './useCartBar'
import { CartBarProps } from './CartBarProps'

const CartBar = ({lng}: CartBarProps) => {

  const { cartState, format, buttonState, onDisableButton, onCheckout, translate } = useCartBarItem(lng)
  const [subtotal, setSubtotal] = useState<number>(0)

  useEffect(() => {
    setSubtotal(cartState.subtotal)
    onDisableButton(cartState.products.length > 0 ? false : true)
  },[cartState])

  return (
    <div className="cart-bar">
      <div className="cart-bar__content">
        <div className="cart-bar__header">
          <h3 className="cart-bar__title">{translate.CART.CART_TOTAL}:</h3>
          <div className="cart-bar__header-value">
            <span className="cart-bar__subtotal">{translate.CART.CART_SUBTOTAL}:</span>
            <span className="cart-bar__value">{ format(subtotal) }</span>
          </div>
        </div>
        <div className="cart-bar__body">
           <Button
              bgStyle="tertiary"
              onClick={onCheckout}
              size="auto"
              textSize={16}
              borderRadius={10}
              disable={buttonState}
            >
              {translate.CART.CART_BTN}
            </Button>
        </div>
      </div>
    </div>
  )
}

export default CartBar