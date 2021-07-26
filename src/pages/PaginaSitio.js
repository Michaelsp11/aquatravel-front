
export const PaginaSitio = () => {

    return (

        <body className="container-flex">
            <main className="row">


                {/* IMAGENES DEL SITIO */}

                <div className="col-12 text-center imagen"><img alt="Playa de bogatell" src="playabogatell.jpg"></img></div>


                {/* NOMBRE Y DATOS IMPORTANTES */}

                <div className="col-12 datos">
                    <div className="row">
                        <span className="col-8 text-left nombre"><h4>Playa de Bogatell</h4></span> <span className="col-4 text-rigth puntuación"></span>
                        <span className="col-6 text-left nombre provincia">Barcelona</span> <span className="col-6 text-center iconos"></span> <span className="col-6 text-right bandera"></span>
                    </div>
                </div>


                {/* DESCRIPCION DEL SITIO */}

                <div className="col-12 descripcion">
                    <div className="row">
                        <span className="col-12 descript"><p>Arena suave, playa concurrida.</p></span>
                        <span className="col-6 servicios"><p></p>Socorrista, chiringuito bar.</span> <span className="col-6 acceso"><p>Acceso fácil, zona azul para aparcar.</p></span>
                    </div>
                </div>


                {/* MAPA CON UBICACION DEL LUGAR */}

                <div className="col-12 mapa"></div>

            </main>
        </body>
    );
};