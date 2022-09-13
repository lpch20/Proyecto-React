import React from 'react'
import { CartContext, useCartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { BsFillTrashFill} from "react-icons/bs";

const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

  return (
    <div className='conatiner my-5'>
      <h2>Carrito</h2>
      <hr />

      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.imagen} />
          <h3>Nombre:{item.nombre}</h3>
          <p>Cantidad: {item.cantidad}</p>
          <p>Precio: ${item.precio}</p>
          <p>Talle: {item.talle}</p>
          <button onClick={() => removeItem(item.id)} className='btn btn-danger'><BsFillTrashFill/></button>
        </div>
      ))}


      <h4>Total: ${cartTotal()}</h4>
      <button onClick={emptyCart} className='btn btn-danger'>Vaciar Carrito</button>

    </div>
  )
}

export default Cart