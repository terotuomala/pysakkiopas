import React, {Component} from 'react';
import Link from 'react-router-dom';
import {Grid} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Grid>
        <h1>Welcome!</h1>
      </Grid>  
    )
  }
}

export default Home;
