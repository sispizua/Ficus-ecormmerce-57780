import React from 'react'
import { TbGardenCart } from "react-icons/tb";
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className='cartWidget'>
    <TbGardenCart className='carrito'/>
        <p className='numero'>1</p>
    </div>
  )
}

export default CartWidget