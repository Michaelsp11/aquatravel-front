import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Cabecera } from "./componentes/Cabecera";
import { Footer } from "./componentes/Footer";
import { Inicial } from "./pages/Inicial";
import { About } from "./pages/About";
import { RutaProtegida } from "./componentes/RutaProtegida";
import { Login } from "./pages/loginPage/Login";
import { Registrar } from "./pages/Registrar";
import { Logout } from "./componentes/Logout";
import { PaginaNoEncontrada } from "./pages/PaginaNoEncontrada";
import { AuthContextProvider } from "./contextos/AuthContextProvider";
import { CrearPunto, FormularioPlayas } from "./pages/CrearPunto";
import { FormularioPuntuacion } from "./componentes/FormularioPuntuacion";
import { UsuarioConfirmado } from "./pages/UsuarioConfirmado";
import { VerificarUsuario } from "./pages/VerificarUsuario";
import { UsuarioRegistrado } from "./componentes/UsuarioRegistrado";
import { ConfirmarUsuario } from "./componentes/ConfirmarUsuario";
import { PaginaSitio } from "./pages/PaginaSitio";
function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Cabecera />
        <Switch>
          <Route path="/inicio" exact>
            <Inicial />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/crear-punto" exact>
            <RutaProtegida>
              <CrearPunto />
            </RutaProtegida>
          </Route>
          <Route path="/confirmado/:idUser" exact>
            <ConfirmarUsuario>
              <UsuarioConfirmado />
            </ConfirmarUsuario>
          </Route>
          <Route path="/verify" exact>
            <UsuarioRegistrado>
              <VerificarUsuario />
            </UsuarioRegistrado>
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/logout" exact>
            <RutaProtegida>
              <Logout />
            </RutaProtegida>
          </Route>
          <Route path="/register" exact>
            <Registrar />
          </Route>
          <Route path="/" exact>
            <Redirect to="/inicio" />
          </Route>

          <Route path="/formularioPlayas" exact>
            <FormularioPlayas />
          </Route>
          <Route path="/formularioPuntuacion" exact>
            <FormularioPuntuacion />
          </Route>
          <Route path="/sitio">
            <PaginaSitio />
          </Route>

          <Route path="**" exact>
            <PaginaNoEncontrada />
          </Route>
        </Switch>
        <Footer />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
