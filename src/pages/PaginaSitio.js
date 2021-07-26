
export const PaginaSitio = () => {

    return (

        <div className="container general">

            {/* IMAGENES DEL SITIO */}

            <div className="row imagen-sitio">
                <div className="col-12 text-center"><img className="foto" alt="Playa de bogatell" src="playabogatell.jpg"></img></div>
            </div>

            {/* NOMBRE Y DATOS IMPORTANTES */}
            <div className="row datos">
                <div className="col-12">
                    <span className="row nombre"><h4>Playa de Bogatell</h4></span> <span className="col-4 puntuación"></span>
                    <span className="row provincia">PRVINCIA: Barcelona</span>
                    <span className="row iconos">iconos:</span>
                    <span className="row bandera">BANDERA:</span>
                </div>
            </div>

            {/* DESCRIPCION DEL SITIO */}
            <div className="row descripcion">
                <div className="col-12">
                    <p className="row descript">DESCRIPCIÓN: Arena suave, playa concurrida.</p>
                    <p className="row servicios">SERVICIOS: Socorrista, chiringuito bar.</p>
                    <p className="row acceso">ACCESO: fácil, zona azul para aparcar.</p>
                </div>
            </div>




            {/* MAPA CON UBICACION DEL LUGAR */}
            <div className="row  ubi">
                <div className="col-12 text-center">
                    <img classname="foto" alt="Mapa con la ubicacion" src="maps.PNG"></img>
                </div>
            </div>
        </div>
    );
};
