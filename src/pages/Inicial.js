import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaPlus } from "react-icons/fa";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contextos/AuthContext";
export const Inicial = () => {
  const { logueado } = useContext(AuthContext);
  const [coordenadas, setCoordenadas] = useState([41.4036299, 2.1743558]);
  navigator.geolocation.getCurrentPosition((posicion) => {
    const { latitude, longitude } = posicion.coords;
    setCoordenadas([latitude, longitude]);
  });

  // const obtenerUbicacionActual =

  return (
    <main className="">
      <div className="mapa w-100 position-relative">
        <MapContainer center={coordenadas} zoom={13}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/michaelsp11/ckrcg58em1hjp17o54dqcjt5i/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWljaGFlbHNwMTEiLCJhIjoiY2twaTdxdmgxMDY0dTJ3cXl4ZHRtM3prbiJ9.Mac0yVJ1kc1mI8l9ToexvQ"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />
          <Marker position={coordenadas}>
            <Popup>Estas Aqui! o No WhoKnow!</Popup>
          </Marker>
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
