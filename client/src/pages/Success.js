/* import { useLocation } from 'react-router' */
import { useSelector } from "react-redux"

const Success = () => {
  /* const location = useLocation() */
  const cart = useSelector(state => state.cart)
  console.log(cart);
  return (
    <div>Compra Realizada</div>
  )
}

export default Success