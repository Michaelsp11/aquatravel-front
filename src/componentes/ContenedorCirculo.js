import { Circulo } from "./Circulo";

export const ContenedorCirculo = () => {
  const circulos = Array.from(new Array(5), (elemento, i) => i + 1);
    return(
      <div className="contenedor">
        {circulos.map((circulo) => (
         <Circulo key = {circulo} />
        ))}
      </div>
    );
};
