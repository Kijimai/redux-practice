import { createSlice } from "@reduxjs/toolkit"
import cartItems from "../../cartItems"

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state, payload) => {
      console.log(payload)
      console.log("Clearing Cart")
      state.cartItems = []
    },
    increaseAmount: (state, { payload }) => {},
    decreaseAmount: (state, { payload }) => {},
    updateCart: (state) => {
      state.amount = state.cartItems.length
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== payload
      })
    },
  },
})
// console.log(cartSlice)

export const {
  clearCart,
  increaseAmount,
  decreaseAmount,
  updateCart,
  removeItem,
} = cartSlice.actions

export default cartSlice.reducer
