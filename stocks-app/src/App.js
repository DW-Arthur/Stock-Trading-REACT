import stock from './stock.gif';
import Stock from './Stock';
import './App.css';
import React, { Component } from 'react';
import Resource from './resources'
import {Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Links from './components/Links';
import Ticker from './Ticker'
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {  //the object that .then returns, got passed to the next .then as parameter.
      fetch("http://localhost:9000/testAPI") //"testAPI" invoke the function in api/routes/testAPI.js
          .then(res => res.text()) //converte res to text format
          .then(res => this.setState({ apiResponse: res})) //set state to store res in the apiResponse
          .catch(err => err);
  }

  componentWillMount() {
      this.callAPI(); //componentWillMount will trgger before the initial render(when the component load)
  }

  render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src={stock} className="App-logo" alt="logo" />
        <Stock>

        </Stock>
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

        
        <a
          className="App-link"
          href="https://www.investopedia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Basic Trading Termninology

        </a>
        <Route exact path="/resource" component ={Resource}/>  {/* create the Resource page */}
        <p>User 1 <span class="tab"></span> User 2 <span class="tab"></span> User 3</p>
        <p className="App-intro">;{this.state.apiResponse}</p>
        <noscript>Test</noscript>
      </header>
      <div>
        <Ticker />
      </div>

      
      </div>
    )
    
  }
}

export default App;
