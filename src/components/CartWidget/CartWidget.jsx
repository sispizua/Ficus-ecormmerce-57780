import React from 'react'
import { TbGardenCart } from 'react-icons/tb'
import { CartContext } from '../../context/CartContext' 
import { useContext } from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext)
  let cantidad = cantidadTotal()
  
  return (
    <Link to="/carrito" className='cartWidget' >
    <TbGardenCart className='carrito'/>
        <p className='numero'>{cantidad > 0 && cantidad} </p>
    </Link>
  )
}

export default CartWidget