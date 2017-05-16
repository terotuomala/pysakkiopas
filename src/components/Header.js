import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><i className="fa fa-map-o" aria-hidden="true"></i> Pysäkkiopas</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title="Suomi">
              <MenuItem eventKey={1.1}>English</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#">Tietoja</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }

  export default Header;
