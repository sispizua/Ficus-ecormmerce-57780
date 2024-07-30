
//import { obtenerProdutos } from '../../data/data.js'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import useLoading from '../../hooks/useLoading'
import "./ItemListContainer.css"
import Loading from './Loading.jsx'
import { useParams } from 'react-router-dom'
import db from '../../db/db.js'
import { collection, getDocs, query, where } from 'firebase/firestore'



const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);

  const {isLoading, showLoading, hideLoading} = useLoading();
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
    { isLoading ? <Loading/> : <ItemList productos = {productos} />}

    </div>
  )}

export default ItemListContainer

  /*showLoading()

  obtenerProdutos()
  .then((respuesta)=>{
    if (idCategoria){
      //filtrar los productos por esa categoria
      const ProductoFiltrados = respuesta.filter((producto)=> producto.categoria === idCategoria)
      setProductos(ProductoFiltrados);
    }else{
            //guardar todos los productos

      setProductos(respuesta);
    }
  })
  .catch((error) =>{
    console.log(error);
  })
  .finally(()=>{
    hideLoading();
  })*/