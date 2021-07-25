import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contextos/AuthContext";
import { NavLink } from "react-router-dom";
export const Login = () => {
  const history = useHistory();
  const { loguearUsuario } = useContext(AuthContext);
  const [datosLogin, setDatosLogin] = useState({
    usuario: "",
    contrasenya: "",
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
            id="usuario"
            className="fadeIn second"
            placeholder="Nombre de usuario"
            value={datosLogin.usuario}
            onChange={setDatos}
          ></input>
          <input
            type="password"
            id="contrasenya"
            className="fadeIn third"
            placeholder="Contraseña"
            value={datosLogin.contrasenya}
            onChange={setDatos}
          ></input>
          {error && <p className="text-danger">Fallo al loguear el usuario!</p>}
          <button type="submit" className="btn btn-submit w-100">
            Entrar
          </button>
        </form>
      </div>
      <div className="row justify-content-center py-3">
        <div className="col-12 text-center">
          <span className="pr-1">¿Aún no estas registrado?</span>
          <NavLink
            to="/register"
            className="color-link-page color-page"
            activeClassName="actual"
          >
            Registrate
          </NavLink>
        </div>
      </div>
    </div>
  );
};
