export const Cabecera = () => {
    return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="HOLI">
          <img className="logo" alt="logo pagina" src="./aquaTravel.png" width="80" height="80" />
        </a>


        <div className="burguer-menu">
          <div className="menu-colapsable" id="navbarToggleExternalContent">
             <div className="bg-light p-4">
              <h4 className="text-dark">Menú</h4>
              <span className="text-white">texto que sale cuando le doy al burguer menu.</span>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="HEEE">Home
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="BUENAS">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="HOLIIII" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="1">Action</a>
                        <a className="dropdown-item" href="2">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="3">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="4">Disabled</a>
                </li>
            </ul>
            </div>
        </nav>

 );
};
