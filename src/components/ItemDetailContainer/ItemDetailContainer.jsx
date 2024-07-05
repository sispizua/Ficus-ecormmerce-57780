import { useState, useEffect } from "react"
import { obtenerProdutos } from "../../data/data.js"
import "./ItemDetailContainer.css"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {idProducto } = useParams()
    
    useEffect (()=>{ 
        obtenerProdutos()
        .then((data) => {
            const productoFiltrado = data.find((productoData) => productoData.id === idProducto)
            setProducto(productoFiltrado)
        })

    }, [])

  return (
    <ItemDetail producto={producto} />
  )
}


export default ItemDetailContainer