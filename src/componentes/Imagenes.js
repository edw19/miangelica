import React, { Fragment } from "react";
import datosImagenes from "../assets/datos/dbImagenes";
import Imagen from './Imagen';

const Imagenes = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col s12 center light-blue darken-1  fondo-cumple">
          <h2 className="brand-logo">
            <br /> <br />
            Felíz Cumpleaños Mi Amor <br /> Eres la mejor Novia. 
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {datosImagenes.map((imagen) => {
            return (
              <Imagen
                key={imagen.id}
                title={imagen.title}
                contenido={imagen.contenido}
                url={imagen.url}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Imagenes;
