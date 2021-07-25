import { useEffect, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";

export const ConfirmarUsuario = (props) => {
  const { idUser } = useParams();
  const { children } = props;
  const history = useHistory();
  const checkIdUsuario = useCallback(async () => {
    const resp = await fetch(
      process.env.REACT_APP_URL_API + "usuarios/usuario/" + idUser
    );
    if (!resp.ok) {
      history.push("/register");
    }
  }, [history, idUser]);
  useEffect(() => {
    checkIdUsuario();
  }, [checkIdUsuario]);
  return children;
};
