import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, updateCart } from "../features/cart/cartSlice"
import CartItem from "./CartItem"

const CartContainer = () => {
  const dispatch = useDispatch()
  const { cartItems, total, amount } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(updateCart())
  }, [cartItems])

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          onClick={() => {
            dispatch(clearCart())
          }}
          type="button"
          className="btn clear-btn"
        >
          Clear Cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
