import {OrderSucess} from "./components/OrderSucess"
import {OrderFail} from "./components/OrderFail"
import { useLocation } from "react-router-dom"
import {useTitle} from "../../hooks/useTitle"
export const OrderPage = () => {
    useTitle("Order Summary")
    const {state} =useLocation()

  return (
   <main>
    {state.status ? <OrderSucess data={state.data} /> : <OrderFail/>}
   </main>
  )
}


