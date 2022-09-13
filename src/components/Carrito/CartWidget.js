import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import carrito from './../../../src/logo de caarrito.png'

const CartShop = () => {

    const {cantidadCart} = useContext(CartContext)

    return (
        <Link to={"/cart"}>
            <div className='imgCarro mx-auto d-block'>
            
                <img src={carrito} id="img-carrito"></img>
                <span>{cantidadCart()}</span>
                
            </div>
        </Link>
    )
}

export default CartShop