import "./App.css";
import Encabezado from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from "./components/ItemsListConatin/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Nosotros from "./components/Nosotros/Nosotros";
import {  CartProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/PiePagina/Footer";

const App = () => {

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
              <Route path="/checkout" element={<Checkout/>}></Route>
            </Routes>
          </div>
          <div>
            <Footer/>
          </div>
        </BrowserRouter>

      </div>

    </CartProvider>
  );
}

export default App;

