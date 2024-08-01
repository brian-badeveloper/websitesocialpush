import './cartTableItem.css'

import CartInput from '@/components/molecules/cartInput/CartInput'
import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { CartTableItemParams } from './CartTableItemProps'
import useCartTableItem  from './useCartTableItem'

const CartTableItem = ({lng, item}: CartTableItemParams) => {

  const { format, onQuantity, onDeleteProduct, translate } = useCartTableItem(lng,item)
    
  return (
    <tr>
      <td className="cart-table-item__first">
        <div className="cart-table-item__product">
          <div className="cart-table-item__card">
            <span className="cart-table-item__card-number">{item.i18n[lng].scope}</span>
          </div>
          <div className="cart-table-item__text">
            <span className="cart-table-item__title">{item.i18n[lng].name}</span>
            <span className="cart-table-item__network"><b>{translate.CART.CART_NETWORK}:</b> {item.name_social}</span>
          </div>
        </div>
      </td>
      <td>
        <span className="cart-table-item__price">{format(Number(item.price))}</span>
      </td>
      <td>
        <span className="cart-table-item__subtotal">{format(Number(item.subtotal))}</span>
      </td>
      <td>
        <div className="cart-table-item__input">
          <CartInput
            valueInitial={item.quantity}
            onQuantity={onQuantity}
          />
        </div>
      </td>
      <td className="cart-table-item__last">
        <button className="cart-table-item__action" onClick={() => onDeleteProduct(item)}>
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