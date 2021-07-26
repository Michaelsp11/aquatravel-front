import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contextos/AuthContext";
import { useFormulario } from "../hooks/useFormulario";

export const CrearPunto = () => {
  const history = useHistory();
  const [datosPunto, setDatosPunto] = useState({
    nombre: "",
    provincia: "",
    comunidad: "",
    descripcion: "",
    latitud: "",
    longitud: "",
    tipoPunto: "",
    imagen: "",
  });
  const [error, setError] = useState(false);
  const { datos, formularioInvalido, setDato } = useFormulario(datosPunto);
  const {
    nombre,
    provincia,
    comunidad,
    descripcion,
    latitud,
    longitud,
    tipoPunto,
    imagen,
  } = datos;
  const appendearDatosFormData = async (datosFormData) => {
    for (const dato in datos) {
      datosFormData.append(dato, datos[dato]);
    }
    return datosFormData;
  };
  const getIdUser = () => {
    let base64Url = localStorage.getItem("token").split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload).idUsuario;
  };
  const enviarFormulario = async (e) => {
    e.preventDefault();
    datos.idUsuario = getIdUser();
    let datosFormData = new FormData();
    datosFormData = await appendearDatosFormData(datosFormData);
    const resp = await fetch(
      process.env.REACT_APP_URL_API + "solicitudes/nueva-solicitud",
      {
        method: "POST",
        body: datosFormData,
      }
    );
    if (!resp.ok) {
      setError(true);
      return;
    }
    setError(false);
    history.push("/inicio");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center py-5">
          <img
            className="imagen"
            src="aquaTravel.png"
            id="icon"
            alt="User Icon"
            width="80"
            height="80"
          />
        </div>
        <form className="form-login mb-5" onSubmit={enviarFormulario}>
          <div className="form-group">
            <label
              htmlFor="nombre"
              className="font-weight-bold color-link-page"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              className="fadeIn second"
              placeholder="Nombre del lugar"
              value={nombre}
              onChange={setDato}
            ></input>
          </div>
          <div className="form-group">
            <label
              htmlFor="provincia"
              className="font-weight-bold color-link-page"
            >
              Provincia:
            </label>
            <input
              type="text"
              id="provincia"
              className="fadeIn third"
              placeholder="Introduce la provincia"
              value={provincia}
              onChange={setDato}
            ></input>
          </div>
          <div className="form-group">
            <label
              htmlFor="comunidad"
              className="font-weight-bold color-link-page"
            >
              Comunidad:
            </label>
            <input
              type="text"
              id="comunidad"
              className="fadeIn four"
              placeholder="Introduce la comunidad"
              value={comunidad}
              onChange={setDato}
            ></input>
          </div>
          <div className="form-group">
            <label
              htmlFor="latitud"
              className="font-weight-bold color-link-page"
            >
              Latitud:
            </label>
            <input
              type="text"
              id="latitud"
              className="fadeIn five"
              placeholder="Latitud"
              value={latitud}
              onChange={setDato}
            ></input>
          </div>
          <div className="form-group">
            <label
              htmlFor="longitud"
              className="font-weight-bold color-link-page"
            >
              Longitud:
            </label>
            <input
              type="text"
              id="longitud"
              className="fadeIn five"
              placeholder="Longitud"
              value={longitud}
              onChange={setDato}
            ></input>
          </div>
          <div className="form-group m-0">
            <label
              htmlFor="tipoPunto"
              className="font-weight-bold color-link-page"
            >
              Tipo de punto:
            </label>
            <select
              id="tipoPunto"
              className="fadeIn six"
              value={tipoPunto}
              onChange={setDato}
            >
              <option value="">Selecciona un tipo:</option>
              <option value="playa">Playa</option>
              <option value="rio">Rio</option>
              <option value="cala">Cala</option>
            </select>
          </div>
          <div className="form-group m-0">
            <label
              htmlFor="imagen"
              className="font-weight-bold color-link-page"
            >
              Imagen:
            </label>
            <input type="file" id="imagen" value={imagen} onChange={setDato} />
          </div>
          <div className="form-group">
            <label
              htmlFor="descripcion"
              className="font-weight-bold color-link-page"
            >
              Descripción:
            </label>
            <textarea
              type="text"
              id="descripcion"
              className="fadeIn second"
              placeholder="Danos una pequeña descripción"
              value={descripcion}
              onChange={setDato}
            ></textarea>
          </div>
          {error && <p className="text-danger">Fallo al crear el punto!</p>}
          <button
            type="submit"
            className="btn btn-submit w-100"
            disabled={formularioInvalido}
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};
