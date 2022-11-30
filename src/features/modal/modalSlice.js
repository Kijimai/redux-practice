import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isShowing: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
})

export default modalSlice.reducer
