import { useEffect } from "react"
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
import Modal from "./components/Modal"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { calculateTotals } from "./features/cart/cartSlice"

function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  const { isShowing } = useSelector((state) => state.modal)

  useEffect(() => {
    dispatch(calculateTotals())
    // eslint-disable-next-line
  }, [cartItems])

  return (
    <main>
      <Navbar />
      <CartContainer />
      {isShowing && <Modal />}
    </main>
  )
}

export default App
