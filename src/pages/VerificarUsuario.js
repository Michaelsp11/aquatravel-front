import { FaExclamationTriangle } from "react-icons/fa";
export const VerificarUsuario = () => {
  return (
    <div className="container">
      <header className="row justify-content-center">
        <div className="col-12 text-center">
          <FaExclamationTriangle className="icon-info-user text-warning" />
        </div>
        <h3 className="font-weight-bold col-12 text-center">
          Confirma tu cuenta!
        </h3>
        <h5 className="col-12 text-center">
          Porfavor, vaya a su correo y confirme su cuenta para poder utilizarla.
        </h5>
      </header>
    </div>
  );
};
