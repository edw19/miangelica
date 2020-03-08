import React from "react";

const Imagen = ({title,contenido, url}) => {
  return (
    <div className="col s12 m7 l4">
      <div className="card">
        <div className="card-image">
          <img src={url} alt="" className="materialboxed" />
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>{contenido}</p>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
