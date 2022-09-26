import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/fireConfig'


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

    const hanldeSubmit = (e) => {
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

        const ordenesRef = collection(db, 'ordenes')

        cart.forEach((item) => {
            const docRef = doc (db, 'productos', item.id)

            getDoc(docRef)
                .then((doc) => {
                    updateDoc(docRef, {
                        stocks: doc.data().stocks - item.cantidad
                    })
                })
        });

        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                terminarCompra(doc.id)
            })

    }

    if (cart.length === 0) {
        return <Navigate to="/"></Navigate>
    }


    return (
        <div className='container'>
            <div><h2 className='my-4'>Checkout</h2></div>
            <hr />

            <form onSubmit={hanldeSubmit}>
                <input value={values.nombre} onChange={handleNombre} type={'text'} className="my-3 form-control" placeholder="Nombre" />
                <input value={values.apellido} onChange={handleApellido} type={'text'} className="my-3 form-control" placeholder="Apellido" />
                <input value={values.email} onChange={handleEmail} type={'email'} className="my-3 form-control" placeholder="Correo Electronico" />
                <input value={values.direccion} onChange={handleDireccion} type={'text'} className="my-3 form-control" placeholder="Direccion" />

                <button type={'submit'} className="btn btn-primary submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout