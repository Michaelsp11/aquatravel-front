export const Cabecera = () => {

  return (
    <>
      <header className="cabecera bg-white py-2">
        <nav className="container position-relative">
          <div className="row align-items-center">
            <div className="col-1">
              <img
                src="./aquaTravel.png"
                alt="Logo de la página"
                className="img-fluid"
              />
            </div>
            <div className="col-11 text-right">
              <button className="btn-nav btn p-0">
                <span className="nav-line-btn"></span>
                <span className="nav-line-btn"></span>
                <span className="nav-line-btn"></span>
              </button>
            </div>
            <div className="navbar-items nav-items col-4 col-sm-2">
              <ul className="list-unstyled text-right">
                <li className="">Login</li>
                <li className="">Registrar</li>
                <li className="">Logout</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
