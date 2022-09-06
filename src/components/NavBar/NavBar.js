import "./NavBar.css";
import logo from './../../../src/logo.webp'
import "./../Carrito/CartWidget"
import CartShop from "./../Carrito/CartWidget";
import {Link} from "react-router-dom";
import Item from "../Item/Item";
import Items from "../ItemsListConatin/ItemListContainer";

const Encabezado= () => {

  return (
    <header>
      <nav id="navBar" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to='/' className="navbar-brand">
          <img src={logo} className="App-logo" alt="logo" /> Artic
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/productos/remeras' className="nav-link active" aria-current="page" >
                Remeras
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/productos/canguros' className="nav-link" >
                  Canguros
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/productos/championes' className="nav-link" >
                  Championes
                </Link>
              </li>
            </ul>
            <div>
                <CartShop/>
            </div>
          </div>
        </div>
      </nav>


    </header>
  );
};

export default Encabezado;
