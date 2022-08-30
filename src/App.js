import "./App.css";
import Encabezado from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from "./components/Contador/ItemCount";
import { useState } from "react";
import Items from "./components/ItemsListConatin/ItemListContainer";


function App () {

  const [show, setShow] = useState(true)
  const handleShow = () => {
    setShow(!show)
  }
  
  
  return (
    <div className="container">
      <Encabezado/>
    

      <Items/>
    </div>
  );
}

export default App;

