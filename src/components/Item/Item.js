import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({ producto }) => {
    return (
    
            <div className="card">
                <div className="card-body">
                            <h4>{producto.nombre}</h4>
                                <img src={producto.imagen} />
                                <select name="talles" id="talles">
                                    <option id="XL">{producto.talles[0]}</option>
                                    <option id="L">{producto.talles[1]}</option>
                                    <option id="XXL">{producto.talles[2]}</option>
                                    <option id="M">{producto.talles[3]}</option>
                                </select>
                        <p>Precio: $ {producto.precio}</p>
                        <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver mas</Link>
                </div>
            </div>

    )
}

export default Item