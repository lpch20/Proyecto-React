import "./App.css";
import Encabezado from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from "./components/Contador/ItemCount";
// import { useState } from "react";
import Items from "./components/ItemsListConatin/ItemListContainer";
import PokeApi from "./components/PokeApi/PokeApi";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Nosotros from "./components/Nosotros/Nosotros";
import {  CartProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";


const App = () => {

  // const [show, setShow] = useState(true)
  // const handleShow = () => {
  //   setShow(!show)
  // }

  return (

    <CartProvider>

      <div className="container">

        <BrowserRouter>
          <div>
            <Encabezado />
          </div>
          <div className="items">
            <Routes>
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/productos/:categoryId" element={<Items />} />
              <Route path="/cart/" element={<Cart />} />
              <Route path="/" element={<Items />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/nosotros" element={<Nosotros />}></Route>
            </Routes>
          </div>
          {/* <PokeApi/> */}
        </BrowserRouter>



      </div>

    </CartProvider>
  );
}

export default App;

