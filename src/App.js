import { useEffect } from "react"
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { calculateTotals } from "./features/cart/cartSlice"

function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(calculateTotals())
    // eslint-disable-next-line
  }, [cartItems])

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
