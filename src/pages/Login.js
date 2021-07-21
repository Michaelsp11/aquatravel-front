import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contextos/AuthContext";
import { NavLink } from "react-router-dom";
export const Login = () => {
  const history = useHistory();
  const { loguearUsuario } = useContext(AuthContext);
  const [datosLogin, setDatosLogin] = useState({
    usuario: "",
    contraseña: "",
  });
  const [error, setError] = useState(false);
  const setDatos = (e) => {
    setDatosLogin({
      ...datosLogin,
      [e.target.id]: e.target.value,
    });
  };

  //REACT_APP_URL_API AÑADIR .ENV
  const enviarFormulario = async (e) => {
    e.preventDefault();
    const resp = await fetch(process.env.REACT_APP_URL_API + "usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosLogin),
    });
    if (!resp.ok) {
      setError(true);
      return;
    }
    setError(false);
    const { token } = await resp.json();
    localStorage.setItem("token", token);
    loguearUsuario();
    history.push("/inicio");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center py-5">
          <img
            className="imagen"
            src="aquaTravel.png"
            id="icon"
            alt="User Icon"
            width="80"
            height="80"
          />
        </div>
        <form className="form-login" onSubmit={enviarFormulario}>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="Usuario"
          ></input>
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="Contraseña"
          ></input>
          <input
            type="text"
            id="email"
            className="fadeIn fourth"
            name="email"
            placeholder="Email"
          ></input>
          <input type="submit" className="fadeIn five" value="LogIn"></input>
        </form>
      </div>
      <div className="row justify-content-center py-3">
        <div className="col-12 text-center">
          <span className="pr-1">¿Aún no estas registrado?</span>
          <NavLink
            to="/register"
            className="link-page color-page"
            activeClassName="actual"
          >
            Registrate
          </NavLink>
        </div>
      </div>
    </div>
  );
};
