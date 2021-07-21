import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contextos/AuthContext";
export const Cabecera = () => {
  const { logueado } = useContext(AuthContext);
  return (
    <>
      <header className="cabecera bg-white py-2">
        <nav className="container position-relative">
          <div className="row align-items-center">
            <div className="col-2 col-sm-1">
              <NavLink to="/inicio" activeClassName="actual">
                <img
                  src="./aquaTravel.png"
                  alt="Logo de la página"
                  className="img-fluid"
                />
              </NavLink>
            </div>
            <div className="col-10 col-sm-11 text-right">
              <ul className="list-inline m-0">
                {!logueado ? (
                  <li className="list-inline-item">
                    <NavLink
                      to="/login"
                      className="btn-nav btn"
                      activeClassName="actual"
                    >
                      Iniciar Sesión
                    </NavLink>
                  </li>
                ) : (
                  <li className="list-inline-item">
                    <NavLink
                      to="/logout"
                      className="btn-nav btn"
                      activeClassName="actual"
                    >
                      Cerrar Sesión
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
