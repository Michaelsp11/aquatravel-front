
export const PaginaSitio = () => {

    return (

        <body className="container">
            <main className="container-flex general">


                {/* IMAGENES DEL SITIO */}

                <div className="row">
                    <div className="col-12 text-center imagen"><img classname="foto" alt="Playa de bogatell" src="playabogatell.jpg"></img></div>
                </div>

                {/* NOMBRE Y DATOS IMPORTANTES */}
                <div className="row">
                    <div className="col-12 datos">
                        <span className="row nombre"><h4>Playa de Bogatell</h4></span> <span className="col-4 puntuación"></span>
                        <span className="row">
                            <span className="col-6 provincia">PRVINCIA: Barcelona</span> <span className="col-6 iconos">iconos:</span> <span className="col-6 bandera">BANDERA:</span>
                        </span>
                    </div>
                </div>



                {/* DESCRIPCION DEL SITIO */}
                <div className="row">
                    <div className="col-12 descripcion">
                        <p className="row text-center descript">DESCRIPCIÓN: Arena suave, playa concurrida.</p>
                        <p className="row text-center servicios">SERVICIOS: Socorrista, chiringuito bar.</p>
                        <p className="row text-center acceso">ACCESO: fácil, zona azul para aparcar.</p>
                    </div>
                </div>




                {/* MAPA CON UBICACION DEL LUGAR */}
                <div className="row">
                    <div className="col-12 text-center ubicacion"><img classname="foto" alt="Mapa con la ubicacion" src="maps.PNG"></img></div>
                </div>
            </main>
        </body>
    );
};