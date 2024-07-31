"use client"

import './cartInput.css'

import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { useCartInput } from './useCartInput'
import { CartInputProps } from './CartInputProps'

const CartInput = ({valueInitial = '', onQuantity}: CartInputProps) => {

  const { input, onInput, increment, decrement, onChangeInput } = useCartInput({valueInitial, onQuantity})
  
  return (
    <div className="cart-input">
      <button 
        className="cart-input__button"
        onClick={decrement}
      >
        <IconFactory
          color="#fff"
          name="Minus"
          width={16}
          height={16}
        />
      </button>
      <input
        className="cart-input__field"
        type="text"
        name="quantity"
        placeholder='-'
        value={input}
        onChange={onInput}
        onKeyUp={(e) => onChangeInput(e)}
      />
      <button 
        className="cart-input__button"
        onClick={increment}
      >
        <IconFactory
          color="#fff"
          name="Plus"
          width={15}
          height={15}
        />
      </button>
    </div>
  )
}

export default CartInput