import React, {Component} from 'react';
import Link from 'react-router-dom';
import {Col, FormControl, FormGroup, Glyphicon, Grid, InputGroup, Jumbotron} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
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
    )
  }
}

export default Home;
