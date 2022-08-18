import "./App.css";
import Encabezado from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
  return (
    <div className="container">
     
      <Encabezado nombre= "Luciano" apellido="Piñeyro"/>
      
    </div>
  );
}

export default App;
