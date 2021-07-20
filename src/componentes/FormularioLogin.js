export const FormularioLogin =() => {
    return (
        <div className="contenedor">
            <div className="Contenido">

    <div className="fadeIn first">
      <img src="aquaTravel.png" id="icon" alt="User Icon" />
    </div>
    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuario"></input>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="Contraseña"></input>
      <input type="submit" className="fadeIn fourth" value="LogIn"></input>
    </form>
    <div className="formularioFooter">
      <a className="ContrasenyaOlvidada" href="paah">¿Haz olvidado tu contraseña?</a>
    </div>
        </div>
    </div>
    );
};