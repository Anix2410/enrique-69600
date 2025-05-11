import '../styles/EmptyCart.css'
import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <h1>Tu carrito está vacío 😭</h1>
      <h3>Vuelve a la home para ver más productos</h3>
      <Link to='/' className='btn btn-dark'>Ir a home</Link>
    </div>
  )
  
  
}

export default EmptyCart