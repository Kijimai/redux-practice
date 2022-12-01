import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isShowing: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isShowing = true
    },
    hideModal: (state) => {
      state.isShowing = false
    },
  },
})

export const { showModal, hideModal } = modalSlice.actions

export default modalSlice.reducer
