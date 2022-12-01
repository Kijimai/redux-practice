import React from "react"
import { ChevronDown, ChevronUp } from "../icons"
import { useDispatch } from "react-redux"
import { increaseAmount, decreaseAmount, removeItem } from "../features/cart/cartSlice"
const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch()

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button onClick={() => dispatch(removeItem(id))} className="remove-btn">Remove</button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseAmount(id))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
