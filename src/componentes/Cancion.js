import React, { useState } from "react";
import Sound from "react-sound";

const Cancion = props => {
  const { url, nombre, descripcion, urlCancion } = props;
  const [iniciar, actualizarIniciar] = useState({
    play: "STOPPED",
    reproduccion: false
  });

  var Reproduccion;
  if (!iniciar.reproduccion) {
    Reproduccion = "play_arrow";
  } else {
    Reproduccion = "pause";
  }

  const detenerCancion = () => {
    if (iniciar.play === "PLAYING" || iniciar.play === "PAUSED") {
      actualizarIniciar({
        play: Sound.status.STOPPED,
        reproduccion: false
      });
    }
  };

  const iniciarCancion = () => {
    if (iniciar.play === "STOPPED") {
      actualizarIniciar({
        play: Sound.status.PLAYING,
        reproduccion: true
      });
    }
    if (iniciar.play === "PLAYING") {
      actualizarIniciar({
        play: Sound.status.PAUSED,
        reproduccion: false
      });
    }
    if (iniciar.play === "PAUSED") {
      actualizarIniciar({
        play: Sound.status.PLAYING,
        reproduccion: true
      });
    }
  };
  return (
    <li className="collection-item">
      <div>
        <h4 className="secondary-content titulo-songs">{nombre}</h4>
        <a href="#!" onClick={detenerCancion} className="secondary-content">
          <i className="small material-icons songs">stop</i>
        </a>
        <a href="#!" onClick={iniciarCancion} className="secondary-content">
          <i className="small material-icons songs">{Reproduccion}</i>
        </a>
        {<blockquote>{descripcion}</blockquote>}
        <div className="container section">
          <a href="#!">
            <img
              src={url}
              className="materialboxed"
              width="100px"
              height="100px"
              alt=""
            />
          </a>
        </div>
        <Sound url={urlCancion} playStatus={iniciar.play} />
      </div>
    </li>
  );
};

export default Cancion;
