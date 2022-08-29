import { useState, useEffect } from "react" //DECL¡ARAR UN ESTADO EN REACT.
import "./ItemCount.css"


const Contador = () => {
    
    const[counter, setCounter] = useState(1) //DECL¡ARAR UN ESTADO EN REACT.

    const sumar = () =>{
        if(counter < 10){
            setCounter(counter + 1)
            counter++
        }
    }

    const restar = () =>{
        if(counter > 1){
            setCounter(counter - 1)
            counter--
        }
        
    }

    useEffect( () => {
        console.log("Contador montado")
        return () =>{ //DESMONTAR EL COMPONENTE

        }
    }, [counter] )
    
    return (
        <div className="conatiner my-5">
            <button id="button" onClick = {restar} className = "btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button id="button" onClick = {sumar} className = "btn btn-outline-primary">+</button>
        </div>
    )

}

export default Contador