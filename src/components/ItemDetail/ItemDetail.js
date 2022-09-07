import Contador from "../Contador/ItemCount"



const ItemDetail = ({ item }) => {
    return (
        <div id="card">
            <div className="container" >
                <img src={item.imagen} />
                <h3>{item.nombre}</h3>
                {/* <p>{item.category}</p> */}
                <p>${item.precio}</p>
                <select name="talles" id="talles"> 
                                    <option id="XL">{item.talles[0]}</option>
                                    <option id="L">{item.talles[1]}</option>
                                    <option id="XXL">{item.talles[2]}</option>
                                    <option id="M">{item.talles[3]}</option>
                </select>
                <Contador></Contador>
                <button className="btn btn-primary">Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail

