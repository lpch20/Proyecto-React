import { createContext, useContext, useEffect } from "react"
import { useState } from "react"
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(init)

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const isInCart = (id) => {
        return cart.find((item) => item.id === id)
    }

    const cantidadCart = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const emptyCart = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
        })
    }

    const terminarCompra = (id) => {
        Swal.fire({
            title: 'Compra finalizada con exito',
            text: `Numero de orden: ${id}`,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Siguiente'
        })
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    return (

        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cantidadCart,
            cartTotal,
            emptyCart,
            removeItem,
            terminarCompra
        }}>
            {
                children
            }
        </CartContext.Provider>

    )
}

