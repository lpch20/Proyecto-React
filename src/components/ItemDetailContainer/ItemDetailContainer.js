import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import"./ItemDetailContainer.css"
import {doc, getDoc} from "firebase/firestore"
import {db} from "../firebase/fireConfig"


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const{itemId} = useParams()

    console.log(itemId)
    console.log(item)

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
        .then((doc)=>{
            setItem({id: doc.id, ...doc.data()})

        })
        .finally(()=>{
            setLoading(false)
        })

    }, [])
    
    
    return(
        <div id="itemContain">
            {
            loading 
            ?  <h2>Cargando...</h2>
            : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer