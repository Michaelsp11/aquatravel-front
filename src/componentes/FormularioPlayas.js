
export const FormularioPlayas = () =>{

  return(
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
        <form className="form-login">
          <input
            type="text"
            id="nombre"
            className="fadeIn second"
            name="login"
            placeholder="Nombre del lugar"
          ></input>
          <input
            type="text"
            id="provincia"
            className="fadeIn third"
            name="provincia"
            placeholder="Introduce la provincia"
          ></input>
          <input
            type="text"
            id="comunidad"
            className="fadeIn four"
            placeholder="Introduce la comunidad"
          ></input>
          <input
            type="number"
            id="coordenadas"
            className="fadeIn five"
            placeholder="Coordenadas"
          ></input>
          <input type="submit" className="fadeIn six" value="Crear punto"></input>
        </form>
      </div>
    </div>


  );

};
