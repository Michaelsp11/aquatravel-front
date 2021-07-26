export const PaginaSitio = () => {

  return (

      <div className="general">

          {/* IMAGENES DEL SITIO */}
          <div className="imagenlugar w-100 position-relative sm-row">
              <img className="col-12 descripcion-imagen" alt="Playa de bogatell" src="playabogatell.jpg"></img>
          </div>

          {/* NOMBRE Y DATOS IMPORTANTES */}
          <div className="row datos">
              <span className="col-12 nombreplaya"><h4>PLAYA DE BOGATELL</h4></span>
              <span className="col-12 puntuacion">VALORACIÓN</span>
              <span className="col-12 provinciasitio">PROVINCIA: BARCELONA</span>
              <span className="col-12 comunidadsitio">COMUNIDAD: CATALUNYA</span>
              <span className="col-12 descripcionsitio">DESCRIPCIÓN: Playa concurrida.</span>
              <span className="col-12 coordenadassitio">COORDENADAS: </span>
              <span className="col-12 tipositio">TIPO: PLAYA</span>
          </div>
      </div>
  );
};
