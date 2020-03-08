import React from "react";
import Cancion from "./Cancion";
import Datos from "../assets/datos/dbcanciones.json";

function Canciones() {
  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  return (
    <div className="container section">
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center-align">Canciones para ti bebé</h4>
        </li>
        {Datos.map(cancion => {
          if (cancion.fecha <= date) {
            return (
              <Cancion
                key={cancion.id}
                url={cancion.url}
                nombre={cancion.nombre}
                descripcion={cancion.descripcion}
                fecha={cancion.fecha}
                urlCancion={cancion.urlCancion}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Canciones;
