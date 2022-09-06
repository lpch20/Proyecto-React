import "./App.css";
import Encabezado from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from "./components/Contador/ItemCount";
// import { useState } from "react";
import Items from "./components/ItemsListConatin/ItemListContainer";
import PokeApi from "./components/PokeApi/PokeApi";
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App () {

  // const [show, setShow] = useState(true)
  // const handleShow = () => {
  //   setShow(!show)
  // }
  
  return (

    
    <div className="container">

      <BrowserRouter>
        
        <Encabezado/>

          <Routes>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/productos/:categoryId" element={<Items/>}/>
            <Route path="/" element={<Items/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="*" element= {<Navigate to="/"/>}/>
          
          </Routes>
        
        {/* <PokeApi/> */}
      </BrowserRouter>
    

    </div>
  );
}

export default App;

