import "./NavBar.css";
import logo from './../../../src/logo.webp'

const Encabezado = ({ nombre = "Luciano", apellido = "Piñeyro" }) => {
  // console.log(props);

  // const {nombre, apellido} = props

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
          <a className="navbar-brand" href="#">
          <img src={logo} className="App-logo" alt="logo" /> Artic
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Nosotros
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* <h2>
        Hola {nombre} {apellido}
      </h2> */}
    </header>
  );
};

export default Encabezado;
