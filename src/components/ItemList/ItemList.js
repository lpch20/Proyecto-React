import Item from "../Item/Item"


const ItemList = ({ productos }) => {
    return (
        <div classNameName="col d-flex justify-content-space-around-between">

            <div className="title">
                <h2>Productos</h2>
                <hr />
            </div>

            {productos.map((prod) => {
                return <Item producto={prod} key={prod.div}/>
                    
            })}

        </div>
    )
}

export default ItemList