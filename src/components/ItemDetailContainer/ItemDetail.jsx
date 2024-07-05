import React from 'react'
import "./ItemDetailContainer.css"


const ItemDetail = ({producto}) => {
  return (
    <div className="ItemDetail">
        <img src={producto.img}/>
        <div className='Detail'>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion} </p>
        <p>${producto.precio} </p>
        <button>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemDetail