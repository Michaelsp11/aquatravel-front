import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Cabecera } from "./componentes/Cabecera";
import { Footer } from "./componentes/Footer";
import { Inicial } from "./pages/Inicial";
import { RutaProtegida } from "./componentes/RutaProtegida";
import { Login } from "./pages/Login";
import { Registrar } from "./pages/Registrar";
import { Logout } from "./componentes/Logout";
import { PaginaNoEncontrada } from "./pages/PaginaNoEncontrada";
import { AuthContextProvider } from "./contextos/AuthContextProvider";
function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Cabecera />
        <Switch>
          <Route path="/inicio" exact>
            <Inicial />
          </Route>
          <Route path="/lista" exact>
            {/* <Lista/> */}
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
