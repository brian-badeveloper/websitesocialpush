import { useContext, useEffect, useState } from 'react'

import './cartTable.css'

import CartTableItem from '../cartTableItem/CartTableItem'
import { SiteContext } from '@/context/SiteContext'
import { Product } from '@/context/cartReducerProps'
import { CartTableProps } from './CartTableProps'
import getLanguage from '@/models/i18n'

const CartTable = ({lng}: CartTableProps) => {

  const { cartState } = useContext(SiteContext)
  const [items, setItems] = useState<Product[]>([])
  const [show, setShow] = useState<boolean>(false)
  const translate = getLanguage(lng)

  useEffect(() => {
    setShow(cartState.products.length === 0)
    setItems(cartState.products)
  },[cartState])


  return (
    <div className="cart-table">
      <div className="cart-table__responsive">
        <table className="cart-table__table">
          <thead>
            <tr>
              <th>{translate.CART.CART_PRODUCT}</th>
              <th>{translate.CART.CART_PRICE}</th>
              <th>{translate.CART.CART_SUBTOTAL}</th>
              <th>{translate.CART.CART_QUANTITY}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              items.map((item, key) => (
                <CartTableItem
                  item={item}
                  lng={lng}
                  key={`table-item-${key}`}
                />
                )                
              )              
            }
            {
              items.length == 0 && (
                <tr>
                  <td colSpan={12}>
                    <p className="cart-table__empty">
                      {
                        show ? (
                          translate.CART.CART_EMPTY
                        ) : (
                          translate.CART.CART_LOADING
                        )
                      }
                    </p>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CartTable