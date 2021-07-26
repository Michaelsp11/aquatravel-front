import { useEffect, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";

export const Solicitudes = () => {
  const [solicitudes, setSolicitudes] = useState([]);
  const getPuntosPendientes = useCallback(async () => {
    const resp = await fetch(
      `${process.env.REACT_APP_URL_API}puntos/pendientes`
    );
    if (!resp.ok) {
      return;
    }
    const listadoPuntosAPI = await resp.json();
    setSolicitudes(listadoPuntosAPI);
  }, []);
  useEffect(() => getPuntosPendientes(), [getPuntosPendientes]);
  const aceptarSolicitud = async (id) => {
    const resp = await fetch(
      process.env.REACT_APP_URL_API + `puntos/aceptarPunto/${id}`
    );
    if (!resp.ok) {
      return;
    }
    getPuntosPendientes();
  };
  const denegarSolicitud = async (id) => {
    const resp = await fetch(
      process.env.REACT_APP_URL_API + `puntos/punto/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!resp.ok) {
      return;
    }
    getPuntosPendientes();
  };
  return (
    <div className="container">
      <div className="row">
        {solicitudes.length > 0 ? (
          solicitudes.map((solicitud) => (
            <div key={solicitud._id} className="col-12 border-dark py-3">
              <div className="row">
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src={solicitud.urls[0]}
                    alt={solicitud.nombre}
                  />
                </div>
                <div className="col-8">
                  <ul className="list-unstyled">
                    <li>
                      <span className="font-weight-bold">Nombre:</span>
                      {solicitud.nombre}
                    </li>
                    <li>
                      <span className="font-weight-bold">Comunidad:</span>
                      {solicitud.comunidad}
                    </li>
                    <li>
                      <span className="font-weight-bold">Provincia:</span>
                      {solicitud.provincia}
                    </li>
                    <li>
                      <span className="font-weight-bold">Latitud:</span>
                      {solicitud.latitud}
                    </li>
                    <li>
                      <span className="font-weight-bold">Longitud:</span>
                      {solicitud.longitud}
                    </li>
                    <li>
                      <span className="font-weight-bold">Categoria:</span>
                      {solicitud.tipoPunto.charAt(0).toUpperCase() +
                        solicitud.tipoPunto.slice(1)}
                    </li>
                  </ul>
                  <div>
                    <button
                      className="btn btn-success"
                      onClick={() => aceptarSolicitud(solicitud._id)}
                    >
                      Aceptar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => denegarSolicitud(solicitud._id)}
                    >
                      Denegar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            No hay solicitudes en este momento
          </div>
        )}
      </div>
    </div>
  );
};
