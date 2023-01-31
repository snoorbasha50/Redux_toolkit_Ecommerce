import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const Navbar = () => {
  const cartData = useSelector((state) => state.web.cartArr)
  return (
    <div style={{display:"flex",justifyContent:"space-around",margin:"30px"}}>
      <div><Link to="product">Products</Link></div>
      <div><Link to="cart">Cart</Link></div>
      <div>Cart Count:{cartData.length}</div>
     
    </div>
  )
}

export default Navbar
