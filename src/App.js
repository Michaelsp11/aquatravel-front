import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import { FaMinusCircle } from "react-icons/fa";
import { Cabecera } from "./componentes/Cabecera";


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
    </Router>
    <Footer />

  );
}

export default App;
