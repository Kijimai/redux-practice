import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { showModal } from "../modal/modalSlice"
// import cartItems from "../../cartItems"
const url = "https://course-api.com/react-useReducer-cart-projects"

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
}

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    console.log(name)
    console.log(thunkAPI)
    console.log(thunkAPI.getState())
    // Allow the use of dispatch regardless of importing
    // thunkAPI.dispatch(showModal())
    try {
      return await axios.get(url).then(({ data }) => data)
    } catch (err) {
      console.log(err.response)
      return thunkAPI.rejectWithValue(
        "There was an error during your request..."
      )
    }
  }
)

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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.cartItems = action.payload
      state.isLoading = false
    },
    [getCartItems.rejected]: (state, action) => {
      console.log(action)
      state.isLoading = false
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
