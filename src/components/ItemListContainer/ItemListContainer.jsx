
import { obtenerProdutos } from '../../data/data.js'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import useLoading from '../../hooks/useLoading'
import "./ItemListContainer.css"
import Loading from './Loading.jsx'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);

  const {isLoading, showLoading, hideLoading} = useLoading();
  const {idCategoria} = useParams()
  

useEffect(()=>{

  showLoading()

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
    hideLoading()
  });
}, [idCategoria])

  return (
    <div className='itemlistcontainer'>
    { isLoading ? <Loading/> : <ItemList productos = {productos} />}

    </div>
  )}

export default ItemListContainer