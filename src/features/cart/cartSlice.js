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
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId
      })
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
})

export const {
  clearCart,
  increaseAmount,
  decreaseAmount,
  removeItem,
  calculateTotals,
} = cartSlice.actions

export default cartSlice.reducer
