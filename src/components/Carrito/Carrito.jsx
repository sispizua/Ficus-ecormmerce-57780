import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import "./Carrito.css"
import { Link } from 'react-router-dom'


const Carrito = () => {

    const {carrito, borrarProductoPorId, vaciarCarrito, precioTotal} = useContext(CartContext)

    if(carrito.length === 0){
        return(
            <div className='no-hay'>
                <h2>Ups... Aun no tienes nada en el carrito :/</h2>
                <Link className="volver-tienda" to="/">Volver a Tienda</Link>
            </div>
        )
    }
 
  return (
    <div className='lista-carrito'>
        
        {
            carrito.map((productoCarrito) => (
                <div className="producto-carrito" key ={productoCarrito.id}>
                    <img src={productoCarrito.img} width={100} />
                    <h3>{productoCarrito.nombre}, </h3>
                    <p>Precio: ${productoCarrito.precio}</p>
                    <p>Cantidad: {productoCarrito.cantidad} </p>
                    <p>Total parcial: ${productoCarrito.precio * productoCarrito.cantidad} </p>
                    <button onClick={ ()=> borrarProductoPorId(productoCarrito.id) } >Eliminar</button>
                </div>
            ))
        }
        <h3>Precio Total: ${precioTotal()} </h3>
        <div className='volver-compra'>
        <button onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
        <Link className="continuar-compra"to="/checkout">Continuar con la compra</Link>
        </div>
    </div>
  )
}

export default Carrito