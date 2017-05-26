import React, {Component} from 'react';
import {Col, Grid} from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <Grid>
        <Col lg={8} lgOffset={2} md={10} mdOffset={1}>
        <h3>Tietoja pysäkkioppaasta</h3>
      </Col>
      </Grid>
    )
  }
}

export default About;
