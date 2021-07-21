export const FormularioFiltrar = () =>{

  return(
    <>
       <div className="contenedor-formulario">
            <div className="Contenido">

              <div className="contenedor-imagen">
                <img className="imagen" src="aquaTravel.png" id="icon" alt="User Icon" width="80" height="80" />
              </div>
              <form>
                <input type="text" id="name" className="primer input" name="name" placeholder="Nombre del lugar"></input>
                <input type="text" id="provincia" className="segundo input" name="provincia" placeholder="Provincia"></input>
                <input type="text" id="comunidad" className="tercer input" name="comunidad" placeholder="Comunidad"></input>
                <input type="text" id="coordenadas" className="cuarto input" name="coordenadas" placeholder="Coordenadas"></input>
                <input type="text" id="provincia" className="quinto input" name="provincia" placeholder="Provincia"></input>
              </form>
        </div>
     </div>
    </>
  );

};
