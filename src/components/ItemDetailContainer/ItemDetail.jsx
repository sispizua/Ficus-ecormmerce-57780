import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import "./ItemDetailContainer.css"


const ItemDetail = ({producto}) => {

  const {agregarProducto } = useContext(CartContext)

  const agregarAlCarrito = (contador)=> {
    const productoCarrito = {
      ...producto,
      cantidad:contador
    }
agregarProducto(productoCarrito)
  }

  return (
    <div className="ItemDetail">
        <img src={producto.img}/>
        <div className='detail'>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion} </p>
        <p>${producto.precio} </p>
        <ItemCount agregarAlCarrito={agregarAlCarrito} stock={producto.stock} />
        </div>
    </div>
  )
}

export default ItemDetail