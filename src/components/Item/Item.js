import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({ producto }) => {
    return (

        <div className="card">
            <div>
                <div className="card-body">
                    <h4>{producto.nombre}</h4>
                    <img src={producto.imagen} />
                    {
                        producto.stocks > 0
                            ? <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver mas</Link>
                            : <p className='my-2 btn btn-outline-danger'>No hay stock de este producto</p>
                    }

                </div>
            </div>
        </div>

    )
}

export default Item