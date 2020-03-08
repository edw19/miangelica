import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./componentes/Header";

import Imagenes from "./componentes/Imagenes";
import Canciones from "./componentes/Canciones";
import C19 from "./componentes/C19";
import Videos from "./componentes/Videos";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Imagenes} />
          <Route exact path="/canciones" component={Canciones} />
          <Route exact path="/C19" component={C19} />
          <Route exact path="/video" component={Videos} />
        </Switch>
      </Router>
    );
  }
}
