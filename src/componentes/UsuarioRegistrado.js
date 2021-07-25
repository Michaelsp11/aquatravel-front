import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contextos/AuthContext";

export const UsuarioRegistrado = (props) => {
  const { children } = props;
  const { registrado } = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    if (!registrado) {
      history.push("/register");
      return;
    }
  }, [registrado, history]);
  return children;
};
