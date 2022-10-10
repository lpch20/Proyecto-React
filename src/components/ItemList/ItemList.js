import Item from "../Item/Item"
import "./ItemList.css"


const ItemList = ({ productos }) => {
    return (
        <div id="list" classNameName="col d-flex justify-content-space-around-between">

            <div className="title">
                <h2>Productos</h2>
                <hr />
            </div>

            <div className="products">
                {productos.map((prod) => {

                    return <div> <Item producto={prod} key={prod.div} /> </div>

                })}
            </div>

        </div>
    )
}

export default ItemList