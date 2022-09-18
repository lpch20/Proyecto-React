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
            <button id="button" onClick = {handleRestar} className ={`btn mx-2 ${counter === 1 
                ? "btn btn-outline-danger" : "btn btn-outline-primary"}`} disabled={counter === 1} >-</button>
            <span className="mx-2">{counter}</span>
            <button id="button" onClick = {handleSumar} className = {`btn mx-2 ${counter === max ? "btn btn-danger" : "btn btn-primary"}`} disabled={counter === max}>+</button>
            <br></br>
            <button className="btn btn-success my-2" onClick={handleAgregar}>Agregar al Carrito</button>
        </div>
    )

}

export default Contador