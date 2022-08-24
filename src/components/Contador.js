// import { useState, useEffect } from "react" //DECL¡ARAR UN ESTADO EN REACT.

// const Contador = () => {
    
//     const[counter, setCounter] = useState(0) //DECL¡ARAR UN ESTADO EN REACT.
    

//     const sumar = () =>{
//         setCounter(counter + 1)
//         counter++
//     }

//     const restar = () =>{
//         setCounter(counter - 1)
//         counter--
//     }

//     useEffect( () => {
//         console.log("Contador montado")
//         return () =>{ //DESMONTAR EL COMPONENTE

//         }
//     }, [counter] )
    
//     return (
//         <div className="conatiner my-5">
//             <h2>Contador</h2>
//             <hr/>

//             <button onClick = {restar} className = "btn btn-outline-primary">-</button>
//             <span className="mx-2">{counter}</span>
//             <button onClick = {sumar} className = "btn btn-outline-primary">+</button>

//             <p>Ultimo click: {new Date().toLocaleString()}</p>
//         </div>
//     )

// }

// export default Contador