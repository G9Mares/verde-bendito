import React from 'react'
import {BsCart4} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <Link className="nav-link" to="/Cart"><BsCart4 size={40}/></Link>

    
  )
}

export default CartWidget