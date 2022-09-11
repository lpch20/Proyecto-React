import React, { useContext } from "react"
import Contador from "../Contador/ItemCount"
import { useState } from "react"
import Select from "../Select/Select"
import { Carousel } from "bootstrap"
import { CartContext } from "../Context/CartContext"

const ItemDetail = ({ item }) => {

    // const { cart, addToCart } = useContext(CartContext)
    // console.log(cart)
    
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

        // addToCart(itemToCart)

        console.log(itemToCart)

    }

    return (
        <div id="card">
            <div className="container" >
                <img src={item.imagen} />
                <h3>{item.nombre}</h3>
                {/* <p>{item.category}</p> */}
                <p>${item.precio}</p>
                <Select options={item.options} onSelect={setTalle} />
                <Contador max={item.stocks} counter={cantidad} setCounter={setCantidad} handleAgregar={handleAgregar} ></Contador>
            </div>
        </div>
    )
}

export default ItemDetail

