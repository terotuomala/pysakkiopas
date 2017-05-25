import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
      <footer className="footer text-center">
        <p>Made with <i className="fa fa-heart-o" aria-hidden="true"></i> by Tero Tuomala</p>
      </footer>
    </div>
    )
  }
}

export default Footer;
