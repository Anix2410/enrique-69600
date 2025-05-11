import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'

const Checkout = () => {
  const [buyer, setBuyer] = useState({})
  const [validateEmail, setValidateEmail] = useState('')
  const [orderId, setOrderId] = useState('')
  const { cart, clear, cartTotal } = useContext(CartContext)

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  const finalizarCompra = (e) => {
    e.preventDefault()
    if (!buyer.name || !buyer.lastname || !buyer.email) {
      alert('Todos los campos son requeridos')
    } else if (buyer.email !== validateEmail) {
      alert('Los correos no coinciden')
    } else {
      const order = {
        comprador: buyer,
        compras: cart,
        total: cartTotal(),
        date: serverTimestamp()
      }

      const ventas = collection(db, "orders")

      addDoc(ventas, order)
        .then((res) => {
          setOrderId(res.id)
          clear()
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className="container my-5">
      {orderId ? (
        <div className="alert alert-success text-center shadow">
          <h2 className="mb-3">¡Compra realizada con éxito!</h2>
          <p>Tu número de orden es:</p>
          <h4 className="fw-bold">{orderId}</h4>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow p-4">
              <h2 className="text-center mb-4">Finalizá tu compra</h2>
              <form onSubmit={finalizarCompra}>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Ingresá tu nombre"
                    onChange={buyerData}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Apellido</label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder="Ingresá tu apellido"
                    onChange={buyerData}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Ingresá tu correo"
                    onChange={buyerData}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Repetí tu correo</label>
                  <input
                    type="email"
                    name="second-email"
                    className="form-control"
                    placeholder="Confirmá tu correo"
                    onChange={(e) => setValidateEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-bold">
                  Finalizar compra
                </button>
              </form>
            </div>
            <div className="text-center mt-4">
              <h5 className="mb-2">Total en carrito:</h5>
              <p className="fs-4 text-primary fw-bold">${cartTotal()},00</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout
