import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Search from './Search';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Grid>
        <Search />
      </Grid>
    )
  }
}

export default Home;
