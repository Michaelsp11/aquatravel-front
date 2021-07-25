import { useState } from "react";

export const Circulo = () => {
  const [activo,setActivo] = useState(false);
  const circulos = Array.from(new Array(5), (elemento, i) => i + 1);
  const toggle = () => {
    setActivo(!activo);
  };
  return(
    <>
    <div
      className="circulo"
      style={{ backgroundColor: activo ? "orange" : "grey"}}
      onClick={toggle}
    ></div>
    </>
  );
};
