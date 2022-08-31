const PokeApi = () => {

    fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then( (resp) => {
            return resp.json()
        })
        .then((data) =>{
            console.log(data)
        })

    return(
        <div className="conatiner my-5" >
            {/* <h2>PokeApi</h2>
            <hr/> */}
        </div>
    )

}

export default PokeApi