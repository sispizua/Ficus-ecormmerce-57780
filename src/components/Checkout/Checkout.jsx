import React from 'react'
import { useState, useContext } from 'react'
import "./Checkout.css"
import Formulario from './Formulario'
import { CartContext } from '../../context/CartContext'
import db from '../../db/db'
import { collection, addDoc } from 'firebase/firestore'

const Checkout = () => {
const { carrito, precioTotal } = useContext(CartContext)
const [datosForm, setDatosForm] = useState({
    nombre:"",
    telefono:"",
    email:""
})

const [idOrden, setIdOrden] = useState(null);

const guardarDatosinput = (event)=>{
    setDatosForm( { ...datosForm, [event.target.name]: event.target.value } )
}

const enviarOrden = (event)=>{
    event.preventDefault()
    //formatear correctamente 
    const datos = {
        comprador: { ...datosForm},
        productos: {...carrito},
        total: precioTotal()

    }
subirOrden(datos)
}

const subirOrden = (datos)=> {
    const ordenesRef = collection (db, "ordenes") 
    addDoc(ordenesRef, datos)
    .then((respuesta)=> {
        setIdOrden(respuesta.id);
    });
}

  return (
    <div>
        {idOrden ? ( 
            <div>
                <h2>Orden generada con exito !</h2>
                <p>Su numero de pedido es: {idOrden} </p>
                
            </div>) :
            (<Formulario 
                datosForm={datosForm}
                guardarDAtosinput={guardarDatosinput}  
                enviarOrden={enviarOrden} />
            )
        }
    </div>
  )
}

export default Checkout