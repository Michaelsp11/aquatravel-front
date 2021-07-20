import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import { FaMinusCircle } from "react-icons/fa";
import { Cabecera } from "./componentes/Cabecera";
import { Footer } from "./componentes/Footer";

function App() {
  return (
    <Router>
      <Cabecera/>
      <Switch>
        <Route path="/inicio" exact>
          {/* <Inicial /> */}
        </Route>
        <Route path="/lista" exact>
          {/* <Lista/> */}
        </Route>
        <Route path="/login" exact>
          <FormularioLogin />
        </Route>
        <Route path="/" exact>
          <Redirect to="/inicio" />
        </Route>
        <Route path="**" exact>
          <Redirect to="/inicio" />
        </Route>
      </Switch>   
      <Footer />
    </Router>
 
  );
}

export default App;
