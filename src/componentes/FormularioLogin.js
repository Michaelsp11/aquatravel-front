export const FormularioLogin =() => {
    return (
      <div className="contenedor-formulario">
            <div className="Contenido">

              <div className="form">
                <img src="aquaTravel.png" id="icon" alt="User Icon" width="80" height="80" />
              </div>
              <form>
                <span>Usuario</span>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuario"></input>
                <span>Contraseña</span>
                <input type="text" id="password" className="fadeIn third" name="password" placeholder="Contraseña"></input>
                <span>Email</span>
                <input type="text" id="email" className="fadeIn fourth" name="email" placeholder="Email"></input>
                <input type="submit" className="fadeIn five" value="LogIn"></input>
              </form>
        </div>
     </div>
    );
};
