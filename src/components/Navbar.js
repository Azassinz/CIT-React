import React from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown } from 'reactstrap';

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
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" className="gris" >Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/conocenos" className="gris" >Conócenos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/metas" className="gris" >Metas</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}