import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"
import NavbarBootstrap from './components/NavbarBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import ReactHookForm from './components/ReactHookForm';
import Checkout from './components/Checkout'


function App() {
  return (
<BrowserRouter>
<CartProvider>
<NavbarBootstrap/>

<Routes>
  <Route path='/' element={<ItemListContainer greeting='Bienvenido a Bookify. Los libros que nadie busca están aquí 👇'/>}/>
  <Route path='/category/:categoryId' element={<ItemListContainer greeting='Estás en la categoria:'/>}/>
  <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path="/checkout" element={<Checkout />} />

</Routes>
</CartProvider>

</BrowserRouter>
  )
}

export default App
