import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tietoja" component={About} />
            <Route render={function () {
              return <h3 className="not-found">Virhe 404: Sivua ei löydy</h3>
            }} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
