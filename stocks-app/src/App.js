import stock from './stock.gif';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src={stock} className="App-logo" alt="logo" />
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
        <p>User 1 <span class="tab"></span> User 2 <span class="tab"></span> User 3</p>
        <p className="App-intro">;{this.state.apiResponse}</p>
        <noscript>Test</noscript>
      </header>
    </div>
    )
    
  }
}

export default App;
