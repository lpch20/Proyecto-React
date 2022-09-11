import React, { useContext, useEffect } from 'react'
import { Context } from '../Context/CartContext'

const Nosotros = () => {


    const handleClick = (e) =>{
        console.log(e)
    }

    useEffect(() => {
        window.addEventListener('click', handleClick)

        return() =>{
            window.removeEventListener('click', handleClick)
        }
    }, [])


  return (
    <div id="list" classNameName="col d-flex justify-content-space-around-between">

            <div className="title">
                <h2 onClick={handleClick}>Nosotros</h2>
                <hr />
            </div>

        </div>
  )
}

export default Nosotros
