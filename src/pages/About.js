export const About = () => {
  return (
    <main className="container py-5">
      <div className="row">
        <h1 className="titulo titulo-about col-12 text-center mb-4 mb-sm-0">
          Sobre nosotros
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
            AquaTravel fundada en 2021, en un bootcamp de javaScript, ha pasado
            de ser una idea pequeña a una página que cumplirá con la misión de
            descubrir el mundo de forma más fácil para todos.
          </p>
          <p>
            AquaTravel apuesta por la tecnologia para viajar a lugares por
            descubrir. Conectando a millores de viajeros con experiencias
            únicas, y diversas opiniones para crear una comunidad de
            exploradores.
          </p>
        </div>
        <div className="col-12 text-center mt-md-4">
          <h2 className="titulo">Fundadores</h2>
        </div>
        <div className="col-12">
          <ul className="row list-unstyled">
            <li className="col-12 col-6 col-md-4 text-center">
              <div className="fundador shadow-sm">
                <img
                  src="./fotoxavi.jpg"
                  alt="Imagen del fundador Xavier"
                  width="200px"
                  height="271px"
                />
              </div>
            </li>
            <li className="col-12 col-6 col-md-4 text-center">
              <div className="fundador shadow-sm">
                <img
                  src="./fotofelipe.jpg"
                  alt="Imagen del fundador Felipe"
                  width="200px"
                  height="257px"
                />
              </div>
            </li>
            <li className="col-12 col-sm-6 col-md-4 text-center">
              <div className="fundador shadow-sm">
                <img
                  src="./fotoalex.jpg"
                  alt="Imagen del fundador Alex"
                  width="200px"
                  height="184px"
                />
              </div>
            </li>
            <li className="col-12 col-sm-6 col-md-4 text-center">
              <div className="fundador shadow-sm">
                <img
                  src="./fotomichael.jpg"
                  alt="Imagen del fundador Michael"
                  width="200px"
                  height="197px"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
