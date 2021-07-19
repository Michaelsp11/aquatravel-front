
function App() {
  return (
    <header className="contenedor-general pt-3 container-fluid position-sticky">
    <div className="contenido-cabecera px-4 shadow-lg">
      <div className="col">
        <div className="row py-3">
          <nav className="nav-bar col">
            <div className="row align-items-center">
              <div className="col-2">
                <img src="25146_1.png" alt="Logo Aquatravel" height="80" width="80" />
              </div>
              <div className="col-10">
                <div className="row font-weight-bold">
                  <ul className="list-unstyled row align-items-center m-0 ">
                    <li className="item-list text-left px-4">
                      <span>Aquatravel</span>
                    </li>
                    <li className="item-list px-4">
                     <span>Login</span>
                    </li>
                    <li></li>
                    <li className="item-list text-right px-4">
                      <imput className="imputBuscar" type="submit"></imput>
                      <button className="boton botonbuscar btn">Buscar</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  );
}

export default App;
