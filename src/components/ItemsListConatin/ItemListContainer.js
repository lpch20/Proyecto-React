import "./ItemListContain.css"
import pedirDatos from "../../helpers/pedirDatos";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../firebase/fireConfig";

const Items = () => {

    const {categoryId} = useParams()
    console.log(categoryId)

    const [loading, setLoading] = useState(true)

    const [productos, setProductos] = useState([])

    console.log(productos)


    useEffect(() => {

        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef

        getDocs(q)
        .then((snapshot)=>{
            const productosDB = (snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}) ))

            setProductos(productosDB)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [categoryId])

    return (
    <div id="items">
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