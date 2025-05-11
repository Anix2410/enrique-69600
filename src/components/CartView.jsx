import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../styles/CartView.css'

const CartView = () => {
    const { cart, removeItem, clear, cartTotal } = useContext(CartContext)

    const preConfirmation = () => {
        Swal.fire({
            title: '¿Seguro quieres borrar todo el carrito?',
            showDenyButton: true,
            denyButtonText: 'No',
            confirmButtonText: 'Sí'
        }).then((result) => {
            if (result.isConfirmed) {
                clear()
            } else if (result.isDenied) {
            
            }
        })
    }

    return (
        <div className="cart-view-container">
            <h1 className="cart-view-header">Tu Carrito</h1>
            <div>
                {cart.length === 0 ? (
                    <p className="cart-empty">Tu carrito está vacío.</p>
                ) : (
                    cart.map((compra) => (
                        <div key={compra.id} className="cart-item">
                            <img src={compra.img} alt={compra.name} />
                            <div className="cart-item-info">
                                <span>{compra.name}</span>
                                <span>Cantidad: {compra.quantity}</span>
                                <span>Precio: ${compra.price},00</span>
                                <span>Precio Final: ${compra.quantity * compra.price},00</span>
                            </div>
                            <button onClick={() => removeItem(compra.id)}>X</button>
                        </div>
                    ))
                )}
            </div>

            <div className="cart-total">
                <span>Total a pagar: ${cartTotal()}</span>
            </div>

            <div className="cart-actions">
                <button className="clear-cart" onClick={preConfirmation}>Borrar todo el carrito</button>
                <Link to="/checkout">
                    <button className="checkout">Finalizar compra</button>
                </Link>
            </div>
        </div>
    )
}

export default CartView
