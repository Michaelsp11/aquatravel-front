import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contextos/AuthContext";
import { ListadoNavegador } from "./ListadoNavegador";
export const Cabecera = () => {
  const { logueado } = useContext(AuthContext);
  const [showItems, setShowItems] = useState(false);
  const showNavItems = () => {
    setShowItems(!!!showItems);
  };
  return (
    <>
      <header className="cabecera bg-white py-2 position-relative">
        <nav className="container">
          <div className="row align-items-center">
            <div className="col-2 col-sm-1">
              <NavLink to="/inicio" activeClassName="actual">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/aquatravel-f70b5.appspot.com/o/aquaTravel.png?alt=media"
                  alt="Logo de la página"
                  className="rounded-circle"
                  width="65px"
                  height="65px"
                />
              </NavLink>
            </div>
            <div className="d-block d-md-none col-10 col-sm-11 text-right">
              <button className="btn-hamburguer btn p-0" onClick={showNavItems}>
                <span className="nav-line-btn"></span>
                <span className="nav-line-btn"></span>
                <span className="nav-line-btn"></span>
              </button>
            </div>
            <div
              className={`navbar-items${
                showItems ? " show " : " "
              }col-5 d-md-none`}
            >
              <ListadoNavegador
                logueado={logueado}
                mobile={true}
                showNavItems={showNavItems}
              />
            </div>
            <div className="d-none d-md-block col-10 col-sm-11 text-right">
              <ListadoNavegador logueado={logueado} mobile={false} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
