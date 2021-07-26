import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contextos/AuthContext";
import { useEffect } from "react";
export const Cabecera = () => {
  const { logueado } = useContext(AuthContext);
  const [showItems, setShowItems] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const showNavItems = () => {
    setShowItems(!!!showItems);
  };
  const setIdUsuario = () => {
    if (localStorage.getItem("token")) {
      let base64Url = localStorage.getItem("token").split(".")[1];
      let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      let jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload).idUsuario;
    } else {
      return "";
    }
  };
  useEffect(() => {
    const idUsuario = setIdUsuario();
    setIsAdmin(idUsuario === process.env.REACT_APP_ADMIN);
  }, []);
  return (
    <>
      <header className="cabecera bg-white py-2 position-relative">
        <nav className="container">
          <div className="row align-items-center">
            <div className="col-2 col-sm-1">
              <NavLink to="/inicio" activeClassName="actual">
                <img
                  src="aquaTravel.png"
                  alt="Logo de la página"
                  className="logo-img rounded-circle"
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
              <ul className="list-unstyled text-right">
                <li className="">
                  <NavLink
                    to="/inicio"
                    activeClassName="actual"
                    className="text-dark"
                    onClick={showNavItems}
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/about"
                    activeClassName="actual"
                    className="text-dark"
                    onClick={showNavItems}
                  >
                    Sobre Nosotros
                  </NavLink>
                </li>
                {!logueado ? (
                  <li className="">
                    <NavLink
                      to="/login"
                      className="color-link-page"
                      activeClassName="actual"
                      onClick={showNavItems}
                    >
                      Iniciar Sesión
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li className="">
                      <NavLink
                        to="/solicitudes"
                        className="color-link-page"
                        activeClassName="actual"
                        onClick={showNavItems}
                      >
                        Bandeja de solicitudes
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink
                        to="/logout"
                        className="color-link-page"
                        activeClassName="actual"
                        onClick={showNavItems}
                      >
                        Cerrar Sesión
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="d-none d-md-block col-10 col-sm-11 text-right">
              <ul className="list-inline m-0">
                <li className="list-inline-item">
                  <NavLink
                    to="/inicio"
                    activeClassName="actual"
                    className="text-dark"
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink
                    to="/about"
                    activeClassName="actual"
                    className="text-dark"
                  >
                    Sobre Nosotros
                  </NavLink>
                </li>
                {!logueado ? (
                  <li className="list-inline-item">
                    <NavLink
                      to="/login"
                      className="color-link-page"
                      activeClassName="actual"
                    >
                      Iniciar Sesión
                    </NavLink>
                  </li>
                ) : (
                  <>
                    {isAdmin && (
                      <li className="list-inline-item">
                        <NavLink
                          to="/solicitudes"
                          className="text-dark"
                          activeClassName="actual"
                        >
                          Bandeja de solicitudes
                        </NavLink>
                      </li>
                    )}
                    <li className="list-inline-item">
                      <NavLink
                        to="/logout"
                        className="color-link-page"
                        activeClassName="actual"
                      >
                        Cerrar Sesión
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
