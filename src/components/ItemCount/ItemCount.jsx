
import { useState } from "react"

const ItemCount = ( {agregarAlCarrito, stock} ) => {
    const [contador, setContador] = useState(1)

    const sumarContador = ()=> {
        if(contador < stock) { 
            setContador(contador + 1)
        }
    }
    const restarContador = ()=> {
        if(contador > 1){
            setContador (contador - 1)
        }
    }


  return (
    <div className="itemCount">
        <button className="mas-menos" onClick={restarContador}>-</button>
        <p>{contador}</p>
        <button className="mas-menos" onClick={sumarContador}>+</button>
        <button className="agregar" onClick={()=>agregarAlCarrito(contador)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount