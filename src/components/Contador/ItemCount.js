import { useState, useEffect } from "react" //DECL¡ARAR UN ESTADO EN REACT.
import "./ItemCount.css"


const Contador = ({max, counter, setCounter, handleAgregar}) => {

    const handleSumar = () =>{
        if(counter < max){
            setCounter(counter + 1)
            counter++
        }
    }

    const handleRestar = () =>{
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
            <button id="button" onClick = {handleRestar} className = "btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button id="button" onClick = {handleSumar} className = "btn btn-outline-primary">+</button>
            <br></br>
            <button className="btn btn-success my-2" onClick={handleAgregar}>Agregar al Carrito</button>
        </div>
    )

}

export default Contador