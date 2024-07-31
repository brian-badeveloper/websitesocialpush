import { useReducer } from 'react'
import { CartReducerProps, Product } from '../cartReducerProps'
import { CartActionType } from '@/models/types/CartType'
import { cartReducer } from '../cartReducer'

const initState: CartReducerProps = {
  products: [],
  subtotal: 0,
  total: 0
}

const init = () => {
  if (typeof window !== 'undefined') {
    const dataCart = localStorage.getItem('cart') || ""
    const cart = dataCart && typeof dataCart === 'string' ? JSON.parse( dataCart ) : ""

    return {
      products: cart && cart.products ? cart.products as Product[] : [],
      subtotal: cart && cart.subtotal ? cart.subtotal as number : 0,
      total: cart && cart.total ? cart.total as number : 0,  
    }
  } else {
    return initState
  }
}

const useCart = () => {

  const [cartState, dispatch] = useReducer(cartReducer, initState, init)

  const quantityCart = () => {
    const quantity = cartState.products.map((item) => item.quantity)
    const quantity_total = quantity.reduce((count, item) => item + count, 0)
    return quantity_total
  }

  const getProduct = ({id}: Product) => {
    return cartState.products.find(item => item.id === id)
  }

  const addCart = (product: Product) => {
    const {id, name, name_social, i18n, price, quantity = 1} = product
    const productFound = cartState.products.find(item => item.id === id)
        
    const prod = {
      id,
      name,
      name_social,
      i18n,
      price,
      subtotal: price * quantity,
      quantity
    }

    if (productFound) {
      prod.quantity = productFound.quantity + quantity
    }

    return updateCart(product)
  }

  const updateCart = (product: Product) => {
    const {id, name, name_social, i18n, price, quantity = 1} = product
    const productFound = cartState.products.find(item => item.id === id)
    const products = cartState.products.filter(item => item.id !== id)
    
    const prod = {
      id,
      name,
      name_social,
      i18n,
      price,
      subtotal: price * quantity,
      quantity,
      position: products.length + 1
    }

    if (productFound) {
      prod.quantity = quantity
      prod.subtotal = prod.price * prod.quantity
      prod.position = productFound.position ? productFound.position : products.length + 1
    }

    const subtotals = products.map((item) => item.subtotal)
    const subtotal = prod.subtotal + subtotals.reduce((count, item) => item + count, 0)
    const total = subtotal

    const cart: CartReducerProps = {
      ...cartState,
      products: [...products, prod].sort((a, b) => (a.position && b.position) ? a.position - b.position : 0),
      subtotal,
      total
    } 

    const action = {
      type: CartActionType.change,
      payload: cart
    }

    localStorage.setItem('cart', JSON.stringify(cart))
   
    dispatch(action)
  }

  const deleteCart = ({id}: Product) => {
    const products = cartState.products.filter(item => item.id !== id)
    
    const subtotals = products.map((item) => item.subtotal)
    const subtotal = subtotals.reduce((count, item) => item + count, 0)
    const total = subtotal

    const cart: CartReducerProps = {
      ...cartState,
      products: [...products],
      subtotal,
      total
    }

    const action = {
      type: CartActionType.change,
      payload: cart
    }

    localStorage.setItem('cart', JSON.stringify(cart))
   
    dispatch(action)
  }

  const truncateCart = () => {
    
    const cart: CartReducerProps = {
      ...cartState,
      products: [],
      subtotal: 0,
      total: 0
    }

    const action = {
      type: CartActionType.change,
      payload: cart
    }

    localStorage.removeItem('cart')
   
    dispatch(action)
  }

  return {
    cartState,
    getProduct,
    quantityCart,
    addCart,
    updateCart,
    deleteCart,
    truncateCart
  }
}

export default useCart