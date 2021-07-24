export const About = () => {
  return (
    <main className="contenedor-principal text-center">
        <h1>AquaTravel</h1>
      <body>
        <div className="d-flex justify-content-center">
          <p className="col-7">
            AquaTravel fundada en 2021, en un bootcamp de javaScript, ha pasado
            de ser una idea pequeña a una página que cumplirá con la misión de descubrir el mundo de forma más fácil para todos.
            <br></br>AquaTravel apuesta por
            la tecnologia para viajar a lugares por descubrir.
            Conectando a millores de viajeros con experiencias únicas, y
            diversas opiniones para crear una comunidad de exploradores.
          </p>
        </div>
        <div className="d-flex justify-content-around">
        <div className="fundador shadow-sm">
          <img
            src="./fotoxavi.jpg"
            alt="Xavier"
          />
        </div>
        <div className="fundador1 shadow-sm">
          <img
            src="./fotofelipe.jpg"
            alt="Felipe"
          />
        </div>
        <div className="fundador2 shadow-sm">
          <img
            src="./fotoalex.jpg"
            alt="Alex"
      
          />
        </div>
        <div className="fundador3 shadow-sm">
          <img
            src="./fotomichael.jpg"
            alt="Michael"
         
          />
          </div>
        </div>
      </body>
    </main>
  );
};
