import React, {Component} from 'react';
import Link from 'react-router-dom';
import {Grid} from 'react-bootstrap';
import Search from './Search';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Grid>
        <div className="col-xs-12 col-sm-6 col-sm-push-3 col-md-6 col-md-push-3">
        <Search />
      </div>
      </Grid>
    )
  }
}

export default Home;
