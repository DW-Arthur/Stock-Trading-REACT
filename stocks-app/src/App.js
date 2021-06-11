import stock from './stock.gif';
import Stock from './Stock';
import './App.css';
import { Component } from 'react';
import Resource from './resources'
import Ticker from './Ticker'
import {Route, link} from 'react-router-dom';

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
