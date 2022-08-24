import "./App.css";
import Encabezado from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from "./components/Contador";
import { useState } from "react";
import Items from "./components/Items/ItemListContainer";


function App () {

  const [show, setShow] = useState(true)
  const handleShow = () => {
    setShow(!show)
  }


  return (
    <div className="container">
      <Encabezado nombre= "Luciano" apellido="Piñeyro"/>
      {/* <Contador/> */}

      {/* <button className="btn btn-btn primary" onClick={handleShow}>Mostrar Contador</button>
      
      {
        show ? <Contador/> :null
      } */}

      <Items/>
    </div>
  );
}

export default App;

