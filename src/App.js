import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

import Home from "./pages/Home";
import Conocenos from "./pages/Conocenos";
import Metas from "./pages/Metas";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>

          <Navbar />

          <Switch>
            <Route exact path="/">
              <Inicio />
            </Route>
            <Route exact path="/conocenos">
              <Nosotros />
            </Route>
            <Route exact path="/metas">
              <Objetivos />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>

          <Footer />

        </div>
      </Router>
    );
  }
}

function Inicio() {
  return (
    <div>
      <Home />
    </div>
  );
}

function Nosotros() {
  return (
    <div>
      <Conocenos />
    </div>
  );
}

function Objetivos() {
  return (
    <div>
      <Metas />
    </div>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div className="justify-content-center text-center" >
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <img className="img-fluid" src={require('./assets/images/404-min.jpg')} alt="not found" />
    </div>
  );
}