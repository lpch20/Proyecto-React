import React from 'react'
import { CartContext, useCartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import { Link, Navigate } from 'react-router-dom';

const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

  if (cart.length === 0) return <Navigate to="/"/>

  if (cart.length === 0) {
    return (
      <div className='container my-5'>
        <h2>Tu carrito esta vacio</h2>
        <hr />
        <Link to="/" className='btn btn-primary'>Ir a comprar</Link>
      </div>
    )
  }

  return (
    <div className='conatiner my-5'>

      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.imagen} />
          <h3>Nombre:{item.nombre}</h3>
          <p>Cantidad: {item.cantidad}</p>
          <p>Precio: ${item.precio}</p>
          <p>Talle: {item.talle}</p>
          <button onClick={() => removeItem(item.id)} className='btn btn-danger'><BsFillTrashFill /></button>
        </div>
      ))}


      <h4>Total: ${cartTotal()}</h4>
      <button onClick={emptyCart} className='btn btn-danger'>Vaciar Carrito</button>

      <Link className='btn btn-success mx-3' to={'/checkout'}>Finalizar Compra</Link>


    </div>
  )
}

export default Cart