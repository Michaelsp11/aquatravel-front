import { NavLink } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contextos/AuthContext";
export const UsuarioConfirmado = () => {
  const { setRegistrado } = useContext(AuthContext);
  useEffect(() => {
    setRegistrado(false);
  }, [setRegistrado]);
  return (
    <div className="container">
      <header className="row">
        <div className=" col-12 text-center">
          <FaRegCheckCircle className="icon-info-user text-success" />
        </div>
        <h3 className="font-weight-bold col-12 text-center">
          Cuenta confirmada!
        </h3>
        <NavLink
          to="/login"
          activeClassName="actual"
          className="color-link-page col-12 text-center"
        >
          Accede
        </NavLink>
      </header>
    </div>
  );
};
