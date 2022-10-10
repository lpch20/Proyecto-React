import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import { addDoc, collection, doc, getDoc, updateDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore'
import { db } from '../firebase/fireConfig'
import "./Checkout.css"
import {
    MDBInputGroup,
} from 'mdb-react-ui-kit';



const Checkout = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
    })

    const handleNombre = (e) => {
        setValues({
            email: values.email,
            direccion: values.direccion,
            apellido: values.apellido,
            nombre: e.target.value
        })
    }
    const handleEmail = (e) => {
        setValues({
            direccion: values.direccion,
            nombre: values.nombre,
            apellido: values.apellido,
            email: e.target.value
        })
    }
    const handleDireccion = (e) => {
        setValues({
            email: values.email,
            nombre: values.nombre,
            apellido: values.apellido,
            direccion: e.target.value
        })
    }
    const handleApellido = (e) => {
        setValues({
            email: values.email,
            nombre: values.nombre,
            direccion: values.direccion,
            apellido: e.target.value
        })
    }

    const hanldeSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: {
                nombre: values.nombre,
                email: values.email,
                direccion: values.direccion,
                items: cart,
                total: cartTotal()
            }
        }

        if (values.nombre.length < 3) {
            alert("Nombre incorrecto")
            return
        }

        if (values.apellido.length < 3) {
            alert("Apellido incorrecto")
            return
        }

        if (values.email.length < 4) {
            alert("Email incorrecto")
            return
        }

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')

        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {

            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stocks >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stocks: doc.data().stocks - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }

        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            console.log(doc.id)
                            terminarCompra(doc.id)
                        })
                })
        } else {
            alert("Hay items sin stock")
        }

    }

    if (cart.length === 0) {
        return <Navigate to="/"></Navigate>
    }


    return (
        <div className='container'>
            <div><h2 className='checkOut my-4'>Checkout</h2></div>
            <hr />

            <form onSubmit={hanldeSubmit}>

                <>
                    <MDBInputGroup className='mb-3'>
                        <input value={values.nombre} onChange={handleNombre} type={'text'} className="my-3 form-control" placeholder="Nombre" />
                    </MDBInputGroup>

                    <MDBInputGroup className='mb-3'>
                        <input value={values.apellido} onChange={handleApellido} type={'text'} className="my-3 form-control" placeholder="Apellido" />
                    </MDBInputGroup>

                    <MDBInputGroup className='mb-3'>
                        <input value={values.email} onChange={handleEmail} type={'email'} className="my-3 form-control" placeholder="Correo Electronico" />
                    </MDBInputGroup>

                    <MDBInputGroup className='mb-3'>
                        <input value={values.direccion} onChange={handleDireccion} type={'text'} className="my-3 form-control" placeholder="Direccion" />
                    </MDBInputGroup>

                    <button type={'submit'} className=" envioForm btn btn-primary submit">Enviar</button>
                </>

            </form>
        </div>
    )
}

export default Checkout