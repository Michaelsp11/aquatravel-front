import { useCallback, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = (props) => {
  const token = localStorage.getItem("token");
  const [logueado, setLogueado] = useState(!!token);
  const [registrado, setRegistrado] = useState(false);
  const { children } = props;
  const loguearUsuario = () => {
    setLogueado(true);
  };
  const usuarioRegistrado = () => {
    setRegistrado(true);
  };
  const desloguearUsuario = useCallback(() => {
    localStorage.removeItem("token");
    setLogueado(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        logueado,
        token,
        loguearUsuario,
        desloguearUsuario,
        registrado,
        usuarioRegistrado,
        setRegistrado,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
