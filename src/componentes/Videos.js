import React, { Fragment } from "react";

const Videos = () => {
  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
  console.log(date);
  return (
    <div className="container">
      {date >= "2020-01-01" ? (
        <Fragment>
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Consejos</span>
                  <blockquote>
                    Mi amor debemos tomar este video como enseñansa para lo que
                    planeamos en nuestra vida, entiendelo todo, espero que
                    estemos en la misma dirección.
                  </blockquote>
                </div>
                <div class="card-action"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col l12 m12">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/YJty9jZPeaM"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Fragment>
      ) : (
        <blockquote className="tampoco">TAMPOCO PUEDES MIRAR ESTO</blockquote>
      )}
    </div>
  );
};

export default Videos;
