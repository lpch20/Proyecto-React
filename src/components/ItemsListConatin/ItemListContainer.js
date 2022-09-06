import "./ItemListContain.css"
import pedirDatos from "../../helpers/pedirDatos";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const Items = () => {

    const {categoryId} = useParams()
    console.log(categoryId)

    const [loading, setLoading] = useState(true)

    const [productos, setProductos] = useState([])

    console.log(productos)


    useEffect(() => {

        setLoading(true)

        pedirDatos()
            .then((res) => {
                if(!categoryId){
                    setProductos(res)
                }else{
                    setProductos(res.filter((prod) => prod.category === categoryId))
                }
            })
            .catch((error) => {

            })
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])

    return (
    <div>
        {
            loading 
            ? 
            <h2>Cargando...</h2>
            : 
            <ItemList productos={productos}></ItemList>
        }
        
    </div>
    )
}

export default Items