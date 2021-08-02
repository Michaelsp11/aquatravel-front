import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaPlus } from "react-icons/fa";
import { useState, useContext, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import L from "leaflet";
import { AuthContext } from "../contextos/AuthContext";
export const Inicial = () => {
  const { logueado } = useContext(AuthContext);
  const [listadoPuntos, setListadoPuntos] = useState([]);
  const [coordenadas, setCoordenadas] = useState([41.4036299, 2.1743558]);
  navigator.geolocation.getCurrentPosition((posicion) => {
    const { latitude, longitude } = posicion.coords;
    setCoordenadas([latitude, longitude]);
  });

  const cargarPuntos = async () => {
    const resp = await fetch(`${process.env.REACT_APP_URL_API}puntos/listado`);
    if (!resp.ok) {
      return;
    }
    const listadoPuntosAPI = await resp.json();
    setListadoPuntos(listadoPuntosAPI);
  };
  const createIcon = (url) => {
    return new L.Icon({
      iconUrl: url,
      iconSize: [41, 41],
    });
  };
  const getIcon = () => {
    return createIcon("./icon-beach.png");
  };
  useEffect(() => {
    cargarPuntos();
  }, []);
  return (
    <main className="contenedor-mapa">
      <div className="mapa w-100 position-relative">
        <MapContainer center={coordenadas} zoom={13}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/michaelsp11/ckrcg58em1hjp17o54dqcjt5i/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWljaGFlbHNwMTEiLCJhIjoiY2twaTdxdmgxMDY0dTJ3cXl4ZHRtM3prbiJ9.Mac0yVJ1kc1mI8l9ToexvQ"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />
          <Marker position={coordenadas}>
            <Popup>Estas Aqui!</Popup>
          </Marker>
          {listadoPuntos.length > 0 &&
            listadoPuntos.map((punto) => (
              <Marker
                key={punto._id}
                position={[+punto.latitud, +punto.longitud]}
                icon={getIcon()}
              >
                <Popup>
                  <div className="container">
                    <div className="row">
                      <img
                        src={punto.urls[0]}
                        alt={punto.nombre}
                        width="300px"
                        height="150px"
                        className="imagen-popup-punto py-2"
                      />
                      <div className="col-12">
                        <ul className="info-punto row list-unstyled py-2">
                          <li className="col-12 text-white mb-1">
                            <span className="font-weight-bold mr-2">
                              Nombre:
                            </span>
                            {punto.nombre}
                          </li>
                          <li className="col-12 text-white mb-1">
                            <span className="font-weight-bold mr-2">
                              Provincia:
                            </span>
                            {punto.provincia}
                          </li>
                          <li className="col-12 text-white mb-1">
                            <span className="font-weight-bold mr-2">
                              Comunidad:
                            </span>
                            {punto.comunidad}
                          </li>
                          <li className="col-12 text-white mb-1">
                            <span className="font-weight-bold mr-2">
                              Longitud:
                            </span>
                            {punto.longitud}
                          </li>
                          <li className="col-12 text-white mb-1">
                            <span className="font-weight-bold mr-2">
                              Latitud:
                            </span>
                            {punto.latitud}
                          </li>
                          <li className="col-12 text-white mb-1">
                            <span className="font-weight-bold mr-2">
                              Categoria:
                            </span>
                            {punto.tipoPunto.charAt(0).toUpperCase() +
                              punto.tipoPunto.slice(1)}
                          </li>
                          <li className="col-12 text-white">
                            <span className="font-weight-bold mr-2">
                              Descripcion:
                            </span>
                            {punto.descripcion}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
        {logueado && (
          <NavLink to="/crear-punto" className="btn-crearPunto">
            <FaPlus />
          </NavLink>
        )}
      </div>
    </main>
  );
};
