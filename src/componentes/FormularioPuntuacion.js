import { useState } from "react/cjs/react.development";
import { ContenedorCirculo } from "./ContenedorCirculo";
export const FormularioPuntuacion = () => {
  const [activo, setActivo] = useState(false);
  const toggle = () => {
    setActivo(!activo);
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
        <form autoComplete="off" className="form-puntuacion">
          <ContenedorCirculo />
          <input
            type="submit"
            className="fadeIn submit"
            value="Puntuar playa"
          ></input>
        </form>
      </div>
    </div>
  );
};
