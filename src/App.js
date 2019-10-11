import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

import Home from "./pages/Home";
import Conocenos from "./pages/Conocenos";
import Metas from "./pages/Metas";

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/conocenos" component={Conocenos} />
            <Route path="/metas" component={Metas} />
          </Switch>

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;