import React from "react";
import {Link} from "react-router-dom";

import Img from "../assets/imagenes/1.jpg";

const Header = ({ titulo }) => {
  return (
    <div className="container section">
      <a href="#!" className="sidenav-trigger" data-target="menu-side">
        <i className="medium material-icons corazon">favorite</i>
      </a>

      <ul className="sidenav" id="menu-side">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={Img} alt="" />
            </div>
            <a href="#!">
              <img src={Img} alt="" className="circle" />
            </a>
            <a href="#!">
              <span className="name white-text">PARA MI YULIANA BEBE</span>
            </a>
            <a href="#!">
              <span className="email white-text"></span>
            </a>
          </div>
        </li>
        <li>
          <Link
            to="/"
          >
            <i className="material-icons">image</i>
            Imágenes
          </Link>
          <Link
            to="/canciones"
          >
            <i className="material-icons">headset</i>
            Canciones
          </Link>
          <Link
            to="/C19"
          >
            <i className="material-icons">video_label</i>
            Nuestro Día
          </Link>
          <li>
            <div className="divider"></div>
          </li>
          <Link
            to="/video"
          >
            <i className="material-icons">video_label</i>
            1 Enero 2020
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
