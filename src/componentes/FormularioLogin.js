export const FormularioLogin =() => {
    return (
      <div className="contenedor-formulario">
            <div className="Contenido">

              <div className="contenedor-imagen">
                <img className="imagen" src="aquaTravel.png" id="icon" alt="User Icon" width="80" height="80" />
              </div>
              <form>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuario"></input>
                <input type="password" id="password" className="fadeIn third" name="password" placeholder="Contraseña"></input>
                <input type="text" id="email" className="fadeIn fourth" name="email" placeholder="Email"></input>
                <input type="submit" className="fadeIn five" value="LogIn"></input>
              </form>
        </div>
     </div>
    );
};
