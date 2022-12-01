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
    clearCart: (state) => {
      state.cartItems = []
    },
    increaseAmount: (state, action) => {
      const itemId = action.payload
      const foundItem = state.cartItems.find((item) => {
        return item.id === itemId
      })
      foundItem.amount = foundItem.amount + 1
    },
    decreaseAmount: (state, action) => {
      const itemId = action.payload
      const foundItem = state.cartItems.find((item) => {
        return item.id === itemId
      })
      if (foundItem.amount <= 1) {
        foundItem.amount = 1
      } else {
        foundItem.amount = foundItem.amount - 1
      }
    },
    updateCart: (state) => {
      state.amount = state.cartItems.length
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId
      })
    },
  },
})

export const {
  clearCart,
  increaseAmount,
  decreaseAmount,
  updateCart,
  removeItem,
} = cartSlice.actions

export default cartSlice.reducer
