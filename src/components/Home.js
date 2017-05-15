import React, {Component} from 'react';
import Link from 'react-router-dom';
import {Grid, Jumbotron} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron className="spacer">
          <h1>Welcome!</h1>
        </Jumbotron>
      </Grid>
    )
  }
}

export default Home;
