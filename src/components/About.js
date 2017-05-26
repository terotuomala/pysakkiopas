import React, {Component} from 'react';
import {Col, Grid} from 'react-bootstrap';
import './About.css';

class About extends Component {
  render() {
    return (
      <Grid>
        <Col lg={8} lgOffset={2} md={2} mdOffset={1} className="text-center">
          <a href="https://github.com/terotuomala/pysakkiopas" target="blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        </Col>
      </Grid>
    )
  }
}

export default About;
