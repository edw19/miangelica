import React from "react";
import "../../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from "video-react";

function C19() {
  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  return (
    <div className="container Section">
      <h1 className="brand-logo center titulo-videos">
        19 de Diciembre. Nuestro Día Amor
      </h1>
      <ul className="collection with-header">
        <li className="collection-header">
          {date >= "2019-12-19" ? (
            <blockquote className="center-align">
              Mi vida hoy en nuestro día quiero recordarte lo importante que
              eres para mí, lo mucho que me ha gustado pasar estos años a tu
              lado y este año que esta apunto de terminar, es hasta hoy, el año
              más importante para nosotros. Hemos disfrutado muchos momentos,
              peleado en muchas ocasiones, pero me he dado cuenta que siempre
              nuestro amor esta primero. Espero que sigamos aun mejor con
              nuestras vidas y formación para el futuro. Contigo quiero tener
              todo lo que he soñado mi amor, TEN UN MUY FELIZ DIA, UN DIA QUE ES
              HECHO PARA LOS DOSCITOS MI AMOR. Espero que te gusten estos
              videos, como ves no me olvide y aquí están, me demore un poco en
              mostrártelos, míralos son para ti mi vida.
            </blockquote>
          ) : (
            <blockquote>AUN NO PUEDES MIRAR ESTO :P</blockquote>
          )}
        </li>
        {date >= "2019-12-19" ? (
          <li className="collection-header">
            <p>
              <br></br>
              Mi vida este poema habla mucho de lo que yo siento por ti, Espero
              que pronto te lo pueda recitar, me gustaria Muchisimo y quiero
              hacerlo
            </p>
            <br></br>
            <Player
              playsInline
              src="https://res.cloudinary.com/cloudpatricio/video/upload/v1574135876/Mi%C3%A9rcolesDePoes%C3%ADa_La_Historia_de_los_Amores_Imparables_-_MARWAN_fps7bd.mp4"
            />
          </li>
        ) : null}

        {date >= "2019-12-19" ? (
          <div>
            <li className="collection-header">
              <blockquote>Video Principito y la Flor</blockquote>
            </li>
            <li className="collection-header">
              <Player
                playsInline
                src="https://res.cloudinary.com/cloudpatricio/video/upload/v1574135870/El_Principito_y_la_flor_esef3d.mp4"
              />
            </li>
          </div>
        ) : null}
        {date >= "2019-12-19" ? (
          <div>
            <li className="collection-header">
              <blockquote>
                Mira mi Amor :3
              </blockquote>
            </li>
            <li className="collection-header">
              <Player
                playsInline
                src="https://res.cloudinary.com/cloudpatricio/video/upload/v1575410541/oh6tpzqd4vrzh6g22uy4.mp4"
              />
            </li>
          </div>
        ) : null}
      </ul>
    </div>
  );
}

export default C19;
