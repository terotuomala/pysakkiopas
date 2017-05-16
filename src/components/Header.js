import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Col, FormControl, FormGroup, Glyphicon, Grid, InputGroup, Jumbotron} from 'react-bootstrap';
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
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title="Suomi">
              <MenuItem eventKey={1.1}>English</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2}><NavLink to="/about">Tietoja</NavLink></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron>
        <h1>Pysäkkiopas</h1>
        {/* <i className="fa fa-map-o fa-5x" aria-hidden="true"></i> */}
        <p>Löydä pysäkkisi aikataulut helposti.</p>
        <div className="col-xs-12 col-sm-6 col-sm-push-3 col-md-6 col-md-push-3">
          <form>
            <FormGroup bsSize="large">
              <InputGroup>
                <InputGroup.Addon>
                  <Glyphicon glyph="search" />
                </InputGroup.Addon>
                <FormControl type="text" placeholder="Etsi pysäkkejä (esim. sipoontie, V8502..)"/>
              </InputGroup>
            </FormGroup>
          </form>
        </div>
      </Jumbotron>
    </div>
    )
  }
}

export default Header;
