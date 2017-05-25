import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, Jumbotron} from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/"><i className="fa fa-map-o" aria-hidden="true"></i> Pysäkkiopas</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/tietoja">
              <NavItem eventKey={1}>Tietoja</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron>
        <h1>Pysäkkiopas</h1>
        <p>Löydä pysäkkisi aikataulut helposti.</p>
      </Jumbotron>
    </div>
    )
  }
}

export default Header;
