import React from "react"
import { useDispatch } from "react-redux"
import { hideModal } from "../features/modal/modalSlice"
import { clearCart } from "../features/cart/cartSlice"
const Modal = () => {
  const dispatch = useDispatch()

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Are you sure you want to remove all items in your cart?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart())
              dispatch(hideModal())
            }}
          >
            confirm
          </button>
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(hideModal())
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
