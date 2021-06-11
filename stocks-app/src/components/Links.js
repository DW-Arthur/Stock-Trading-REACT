import React from "react"
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Resource from '../resources'

function Links() {
  return <h1>
  
  <a
  className="App-link"
  href="https://www.investopedia.com/"
  target="_blank"
  rel="noopener noreferrer"
  >
  Basic Trading Termninology

  </a>
  <Route exact path="/resource" component ={Resource}/>
  <p>User 1 <span class="tab"></span> User 2 <span class="tab"></span> User 3</p>
  <p className="App-intro">;{this.state.apiResponse}</p>
  <noscript>Test</noscript></h1>
}

export default Links
