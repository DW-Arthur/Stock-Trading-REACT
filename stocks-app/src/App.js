import stock from './stock.gif';
import './App.css';
import React, { Component } from 'react';
import Resource from './resources'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Links from './components/Links';

class App extends Component {

  render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src={stock} className="App-logo" alt="logo" />
        <p>
          Stock Trading Competition
        </p>

        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/links" component={Links} />
            <Route component={Error} />
          </Switch>
        </main>

        <div>
          <Link to="/">Home </Link>
          <Link to="/about">About Us </Link>
          <Link to="/shop">Shop Now </Link>
          <Link to="/links">Links </Link>
        </div>


        
















        
        
      </header>
    </div>
    )
    
  }
}

export default App;
