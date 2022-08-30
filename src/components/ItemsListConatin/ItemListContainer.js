import "./ItemListContain.css"
import pedirDatos from "../../helpers/pedirDatos";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";



const Items = () => {

    const [productos, setProductos] = useState([])

    console.log(productos)


    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {

        })
    }, [])

    return (
    <div>
        <ItemList productos={productos}/>
    </div>
    )
}

export default Items