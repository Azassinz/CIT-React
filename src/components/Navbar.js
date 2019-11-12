import React from 'react';

import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    es: {
      Inicio: "Inicio",
      conocenos: "Conócenos",
      Metas: "Metas"
    },
    en: {
      Inicio: "Home",
      conocenos: "Know us",
      Metas: "Goals"
    }
});

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/" className="mr-auto">
            <img src={require('../assets/images/logo-cit.png')} alt="logo CIT" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} aria-label="toggler"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="gris text-decoration-none m-2" >{strings.Inicio}</Link>
              </NavItem>
              <NavItem>
                <Link to="/conocenos" className="gris text-decoration-none m-2" >{strings.conocenos}</Link>
              </NavItem>
              <NavItem>
                <Link to="/metas" className="gris text-decoration-none m-2" >{strings.Metas}</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}