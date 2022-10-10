import React from 'react'
import { CartContext, useCartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import { Link, Navigate } from 'react-router-dom';
import "./Cart.css"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';


const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

  if (cart.length === 0) return <Navigate to="/" />

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
    <div className='row'>

      <MDBCard className='mdbCard'>
        <MDBCardBody className='bodyCard'>
          <MDBCardText id='bodyCart'>
            <div className='cardVista'>
              {cart.map((item) => (
                <div className='itemsCarrito' key={item.id}>
                  <div className='items'>
                    <img src={item.imagen} />
                    <MDBCardTitle><h2>{item.nombre}</h2></MDBCardTitle>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: ${item.precio}</p>
                    <p>Talle: {item.talle}</p>
                    <button onClick={() => removeItem(item.id)} className='btn btn-danger'><BsFillTrashFill /></button>
                  </div>
                </div>
              ))}
            </div>
          </MDBCardText>
        </MDBCardBody>
        <div id='totalCarrito'>
          <h4>Total: ${cartTotal()}</h4>
          <button onClick={emptyCart} className='btn btn-danger'>Vaciar Carrito</button>

          <Link className='finalizarCompra btn btn-success mx-2' to={'/checkout'}>Finalizar Compra</Link>
        </div>
      </MDBCard>



    </div>
  )
}

export default Cart