import { FaMinusCircle } from "react-icons/fa";
import { Cabecera } from "./componentes/Cabecera";
import { FormularioLogin } from "./componentes/FormularioLogin";

function App() {
  return (
    <Cabecera />
    // <Router>
    //   <Cabecera/>
    //   <Switch>
    //     <Route path="/inicio" exact>
    //       <Inicial />
    //     </Route>
    //     <Route path="/lista" exact>
    //       <Lista datos={datos} />
    //     </Route>
    //     <Route path="/login" exact>
    //       <Login error={error} loguearse={loguearse} />
    //     </Route>
    //     <Route path="/" exact>
    //       <Redirect to="/inicio" />
    //     </Route>
    //     <Route path="**" exact>
    //       <Redirect to="/inicio" />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}
export default App;
