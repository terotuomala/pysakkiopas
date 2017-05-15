import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <Grid>
        <hr/>
        <footer>
          <p>© Tero Tuomala 2017</p>
        </footer>
      </Grid>
    )
  }
}

export default Footer;
