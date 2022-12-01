import { useEffect } from "react"
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
import Modal from "./components/Modal"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { calculateTotals, getCartItems } from "./features/cart/cartSlice"

function App() {
  const dispatch = useDispatch()
  const { cartItems, isLoading } = useSelector((state) => state.cart)
  const { isShowing } = useSelector((state) => state.modal)

  useEffect(() => {
    dispatch(getCartItems('first param value in thunk'))
  }, [])

  useEffect(() => {
    dispatch(calculateTotals())
    // eslint-disable-next-line
  }, [cartItems])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
      {isShowing && <Modal />}
    </main>
  )
}

export default App
