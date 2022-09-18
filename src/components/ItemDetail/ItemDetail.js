import React, { useContext } from "react"
import Contador from "../Contador/ItemCount"
import { useState } from "react"
import Select from "../Select/Select"
import { Carousel } from "bootstrap"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({ item }) => {

    const { cart, addToCart, isInCart } = useContext(CartContext)
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(item.options[0].value)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            imagen: item.imagen,
            talle,
            cantidad

        }

        isInCart(item.id)
        addToCart(itemToCart)

    }

    return (

        <div id="card">
            <div className="container" >
                <img src={item.imagen} />
                <h3>{item.nombre}</h3>
                {/* <p>{item.category}</p> */}
                <p>${item.precio}</p>
                <Select options={item.options} onSelect={setTalle} />

                {
                    isInCart(item.id)
                        ? <Link to="/cart" className="btn btn-primary my-2">Terminar mi Compra</Link>
                        : <Contador max={item.stocks} counter={cantidad} setCounter={setCantidad} handleAgregar={handleAgregar}></Contador>
                }
            </div>

        </div>


    )
}

export default ItemDetail

