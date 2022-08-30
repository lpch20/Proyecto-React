import './Item.css'

const Item = ({ producto }) => {
    return (
        <div className='row stocks'>
            <div className='"col-sm-6"'>
                <div className='card col-xxl-3'>
                    <h4>{producto.nombre}</h4>
                    <img src={producto.imagen} />
                    <select name="talles" id="talles">
                        <option id="XL">{producto.talles[0]}</option>
                        <option id="L">{producto.talles[1]}</option>
                        <option id="XXL">{producto.talles[2]}</option>
                        <option id="M">{producto.talles[3]}</option>
                    </select>
                    <p>Precio: $ {producto.precio}</p>
                    <a className="btn btn-primary my-2">Ver mas</a>
                </div>
            </div>
        </div>

    )
}

export default Item