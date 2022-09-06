// import React, { useEffect, useState } from "react";

// const PokeApi = () => {

//     const [id, setId] = useState(1)
//     const [pokemon, setPokemon] = useState(null)

//     console.log(id)

//     const handleSiguiente = () =>{
//         setId(id + 1)
//     }
//     const handleAnterior = () =>{
//         setId(id - 1)
//     }

//     useEffect(() => {
//         fetch('https://pokeapi.co/api/v2/pokemon/${id}')
//             .then((resp) => {
//                 return resp.json()
//             })
//             .then((data) => {
//                 setPokemon(data)
//             })
            
//     }, [id])

//     return (
//         <div className="conatiner my-5" >
//             <h2>PokeApi</h2>
//             <hr />

//             {pokemon 
//                 ?
//                     <div>
//                         <h3>{pokemon.name}</h3>
//                         <img src={pokemon.sprites.front_default} alt = {pokemon.name} ></img>
//                     </div>

//                 : <h3>Cargando...</h3>
//             }

//             <button onClick={handleAnterior} className="btn btn-primary">Anterior</button>
//             <button onClick={handleSiguiente} className="btn btn-primary">Siguiente</button>


//         </div>
//     )

// }

// export default PokeApi