import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Error } from './components/Error404/Error'
import Footer from './components/Footer/Footer'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout'




function App() {

  return (
    <BrowserRouter>

      <CartProvider>

        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<Carrito/>}></Route>
          <Route path="*" element={ <Error/>} />
          <Route path="/checkout" element={<Checkout/>}></Route>

        </Routes>
        <Footer/>

      </CartProvider>

    </BrowserRouter>
  )
}

export default App
