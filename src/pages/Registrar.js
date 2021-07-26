import { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../contextos/AuthContext";

export const Registrar = () => {
  const history = useHistory();
  const { usuarioRegistrado } = useContext(AuthContext);
  const [datosRegistro, setDatosRegistro] = useState({
    usuario: "",
    contrasenya: "",
    email: "",
  });
  const [error, setError] = useState(false);
  const setDatos = (e) => {
    setDatosRegistro({
      ...datosRegistro,
      [e.target.id]: e.target.value,
    });
  };

  //REACT_APP_URL_API AÑADIR .ENV
  const enviarFormulario = async (e) => {
    e.preventDefault();
    const resp = await fetch(
      process.env.REACT_APP_URL_API + "usuarios/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosRegistro),
      }
    );
    if (!resp.ok) {
      setError(true);
      return;
    }
    setError(false);
    usuarioRegistrado();
    history.push("/verify");
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
        <form
          autoComplete="off"
          className="form-login"
          onSubmit={enviarFormulario}
        >
          <input
            type="text"
            id="usuario"
            className="fadeIn second"
            placeholder="Usuario"
            value={datosRegistro.usuario}
            onChange={setDatos}
          ></input>
          <input
            type="password"
            id="contrasenya"
            className="fadeIn third"
            placeholder="Contraseña"
            value={datosRegistro.contrasenya}
            onChange={setDatos}
          ></input>
          <input
            type="text"
            id="email"
            className="fadeIn fourth"
            name="email"
            placeholder="Email"
            value={datosRegistro.email}
            onChange={setDatos}
          ></input>
          {error && (
            <p className="text-danger">Fallo al registrar el usuario!</p>
          )}
          <button type="submit" className="btn btn-submit w-100">
            Registrar
          </button>
        </form>
      </div>
      <div className="row justify-content-center py-3">
        <div className="col-12 text-center">
          <span className="pr-1">¿Ya tienes una cuenta?</span>
          <NavLink
            to="/login"
            className="color-link-page color-page"
            activeClassName="actual"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};
