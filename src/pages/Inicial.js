import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export const Inicial = () => {
  const position = [40.463667, -3.74922];
  return (
    <main className="container">
      <div className="mapa">
        <MapContainer center={position} zoom={8}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/michaelsp11/ckrcg58em1hjp17o54dqcjt5i/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWljaGFlbHNwMTEiLCJhIjoiY2twaTdxdmgxMDY0dTJ3cXl4ZHRtM3prbiJ9.Mac0yVJ1kc1mI8l9ToexvQ"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />
        </MapContainer>
      </div>
    </main>
  );
};
