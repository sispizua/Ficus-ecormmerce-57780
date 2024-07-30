
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import db from '../../db/db.js'
import { collection, getDocs, query, where } from 'firebase/firestore'



const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);

  
  const {idCategoria} = useParams()
  
  const obtenerProductos = ()=> {
    const ProductosRef = collection (db, "productos")
    getDocs(ProductosRef)
    .then ((respuesta)=> {
      const data = respuesta.docs.map((productoDb)=>{
        return { id:productoDb.id, ...productoDb.data() }

      })

      setProductos (data)
    })
  }


  const obtenerProductosFiltrados = () => {
    const productosRef = collection (db, "productos");
      const q = query(productosRef, where ("categoria", "==", idCategoria));
    getDocs(q)
    .then((respuesta)=>{
      const data = respuesta.docs.map((productoDb)=>{
        return { id:productoDb.id, ...productoDb.data() }
      });

        setProductos (data);
    });
  }

useEffect(()=>{


  if(idCategoria){
    obtenerProductosFiltrados();
  }else{
    obtenerProductos();
  }
}, [idCategoria])

  return (
    <div className='itemlistcontainer'>
   <ItemList productos = {productos} />
    </div>
  )}

export default ItemListContainer
