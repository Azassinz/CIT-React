import React from 'react';
import Footer from "./components/Footer";
import './App.css';
import Home from "./pages/Home";
import Conocenos from "./pages/Conocenos";
import Metas from "./pages/Metas";
import Noticias from "./pages/Noticias";

import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  Button } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    es: {
      nextLang:"EN",
      Inicio: "Inicio",
      conocenos: "Conócenos",
      Metas: "Metas",
      noticias: "Noticias",
      noMatch:"No se encuentra"
    },
    en: {
      nextLang:"ES",
      Inicio: "Home",
      conocenos: "Know us",
      Metas: "Goals",
      noticias: "News",
      noMatch:"No match for"
    }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.changeLang = this.changeLang.bind(this);
    this.state = {
      isOpen: false,
      lang: true
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  changeLang() {
    this.setState({
      lang: !this.state.lang
    });
  }
  render() {
    if(this.state.lang){
      strings.setLanguage('es');
    }else{
      strings.setLanguage('en');
    }
    return (
      <Router>
        <div>

        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/" className="mr-auto">
            <img src={require('./assets/images/logo-cit.png')} alt="logo CIT" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} aria-label="toggler"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="p gris text-decoration-none m-2" >{strings.Inicio}</Link>
              </NavItem>
              <NavItem>
                <Link to="/conocenos" className="p gris text-decoration-none m-2" >{strings.conocenos}</Link>
              </NavItem>
              <NavItem>
                <Link to="/metas" className="p gris text-decoration-none m-2" >{strings.Metas}</Link>
              </NavItem>
              <NavItem>
                <Link to="/noticias" className="p gris text-decoration-none m-2" >{strings.noticias}</Link>
              </NavItem>
              <NavItem>
                <Button className="text-decoration-none gris ml-2 mr-2 mt-0 mb-0 p-0" color="link" onClick={this.changeLang}>{strings.nextLang}</Button>
              </NavItem>
              <UncontrolledDropdown nav inNavbar />
            </Nav>
          </Collapse>
        </Navbar>

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
            <Route exact path="/noticias">
              <Insta />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>

          <Footer
            language={strings.getLanguage()}
          />

        </div>
      </Router>
    );
  }
}

function Inicio() {
  return (
    <div>
      <Home
        language={strings.getLanguage()}
      />
    </div>
  );
}

function Nosotros() {
  return (
    <div>
      <Conocenos
        language={strings.getLanguage()}
      />
    </div>
  );
}

function Objetivos() {
  return (
    <div>
      <Metas
        language={strings.getLanguage()}
      />
    </div>
  );
}

function Insta() {
  return (
    <div>
      <Noticias
        language={strings.getLanguage()}
      />
    </div>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div className="justify-content-center text-center" >
      <h3>
        {strings.noMatch} <code>{location.pathname}</code>
      </h3>
      <img className="img-fluid" src={require('./assets/images/404-min.jpg')} alt="not found" />
    </div>
  );
}