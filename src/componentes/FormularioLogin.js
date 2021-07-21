import { useContext, useState } from "react";
import {useHistory} from "react-router-dom";
import { AuthContext } from "../componentes/contextos/AuthContext";

export const FormularioLogin =() => {
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
      <div className="contenedor-formulario">
            <div className="Contenido">

              <div className="contenedor-imagen">
                <img className="imagen" src="aquaTravel.png" id="icon" alt="User Icon" width="80" height="80" />
              </div>
              <form>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuario"></input>
                <input type="password" id="password" className="fadeIn third" name="password" placeholder="Contraseña"></input>
                <input type="submit" className="fadeIn five" value="LogIn"></input>

              </form>
        </div>
     </div>
    );
};
