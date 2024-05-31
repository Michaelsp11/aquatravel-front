export const About = () => {
  return (
    <main className="container py-5">
      <div className="row">
        <h1 className="titulo titulo-about col-12 text-center mb-4 mb-sm-0">
          Sobre mi
        </h1>
        <div className="col-12 text-center mt-md-4">
          <h2 className="titulo">Historia</h2>
        </div>
        <div className="col-12 col-md-4 text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aquatravel-f70b5.appspot.com/o/aquaTravel.png?alt=media"
            alt="Logo de la web"
            width="290px"
            height="291px"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-8 mt-sm-2">
          <p>
            AquaShare fundada en 2024, como proyecto final de DAM, ha pasado
            de ser una idea pequeña a una página que cumplirá con la misión de
            descubrir el mundo de forma más fácil para todos.
          </p>
          <p>
            AquaShare apuesta por la tecnologia para viajar a lugares por
            descubrir. Conectando a millores de viajeros con experiencias
            únicas, y diversas opiniones para crear una comunidad de
            exploradores.
          </p>
        </div>
        <div className="col-12 text-center mt-md-4">
          <h2 className="titulo">Fundador</h2>
        </div>
        <div className="col-12 ">
          <ul className="row list-unstyled d-flex justify-content-center align-items-center">
            <li className="col-12 col-6 col-md-4 text-center d-flex justify-content-center align-items-center">
              <div className="fundador shadow-sm ">
                <img
                  src="./fotofelipe.jpg"
                  alt="Imagen del fundador Felipe"
                  width="200px"
                  height="257px"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
