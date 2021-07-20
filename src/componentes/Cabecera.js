import { useState } from "react";

export const Cabecera = () => {
  const [showItems, setShowItems] = useState(false);
  const showNavItems = () => {
    setShowItems(!!!showItems);
  };
  return (
    <>
      <header className="cabecera bg-white py-2">
        <nav className="container position-relative">
          <div className="row align-items-center">
            <div className="col-2 col-sm-1">
              <img
                src="./aquaTravel.png"
                alt="Logo de la página"
                className="img-fluid"
              />
            </div>
            <div className="col-10 col-sm-11 text-right">
              <button className="btn-nav btn p-0" onClick={showNavItems}>
                <span className="nav-line-btn"></span>
                <span className="nav-line-btn"></span>
                <span className="nav-line-btn"></span>
              </button>
            </div>
            <div
              className={`navbar-items${
                showItems ? " show " : " "
              }col-4 col-sm-2`}
            >
              <ul className="list-unstyled text-right">
                <li className="">
                  <a href="login">Login</a>
                </li>
                <li className="">
                  <a href="registrarme">Registrar</a>
                </li>
                <li className="">
                  <a href="salir">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
