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
import { CartContext } from "./components/Context/CartContext";
import { useState } from "react";
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {

  // const [show, setShow] = useState(true)
  // const handleShow = () => {
  //   setShow(!show)
  // }

  // const [cart, setCart] = useState([])

  // const addToCart = (item) => {
  //   setCart([...cart, item])
  // }

  return (

    // <CartContext.Provider value={{
    //   cart,
    //   setCart
    // } }>

      <div className="container">

        <BrowserRouter>
          <div>
            <Encabezado />
          </div>
          <div className="items">
            <Routes>
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/productos/:categoryId" element={<Items />} />
              <Route path="/" element={<Items />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/nosotros" element={<Nosotros />}></Route>
            </Routes>
          </div>
          {/* <PokeApi/> */}
        </BrowserRouter>



      </div>

    // </CartContext.Provider>
  );
}

export default App;

