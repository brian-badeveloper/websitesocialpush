import './cartTableItem.css'

import CartInput from '@/components/molecules/cartInput/CartInput'
import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { CartTableItemProps } from './CartTableItemProps'
import useCartTableItem  from './useCartTableItem'

const CartTableItem = ({
  ...props
}: CartTableItemProps) => {

  const { format, onQuantity, onDeleteProduct, translate } = useCartTableItem(props)
    
  return (
    <tr>
      <td className="cart-table-item__first">
        <div className="cart-table-item__product">
          <div className="cart-table-item__card">
            <span className="cart-table-item__card-number">{props.i18n[props.lng].scope}</span>
          </div>
          <div className="cart-table-item__text">
            <span className="cart-table-item__title">{props.i18n[props.lng].name}</span>
            <span className="cart-table-item__network"><b>{translate.CART.CART_NETWORK}:</b> {props.name_social}</span>
          </div>
        </div>
      </td>
      <td>
        <span className="cart-table-item__price">{format(Number(props.price))}</span>
      </td>
      <td>
        <span className="cart-table-item__subtotal">{format(Number(props.subtotal))}</span>
      </td>
      <td>
        <div className="cart-table-item__input">
          <CartInput
            valueInitial={props.quantity}
            onQuantity={onQuantity}
          />
        </div>
      </td>
      <td className="cart-table-item__last">
        <button className="cart-table-item__action" onClick={() => onDeleteProduct(props)}>
          <IconFactory
            color="#6665AD"
            name="Times"
            width={25}
            height={25}
          />
        </button>
      </td>
    </tr>
  )
}

export default CartTableItem