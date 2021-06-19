import React , {useState, useEffect} from "react"
import stock from './stock.gif';
import './Home.css';
import Stock from './Stock'
import Ticker from "./Ticker"
function Home() {

    const [ApiRes, setApiRes] = useState("");

    function callAPI() {  //the object that .then returns, got passed to the next .then as parameter.
        fetch("http://localhost:9000/testAPI") //"testAPI" invoke the function in api/routes/testAPI.js
            .then(res => res.text()) //converte res to text format
            .then(res => setApiRes({res})) //set state to store res in the apiResponse
            .catch(err => err);
    }

    
    useEffect( ()=>{
    console.log('component will mount in effect')
    //this.callAPI()//this.callAPI(); 
    },[])
    
  
    return <div className='home-class '>
        <h1> Stock Trading Competition</h1>
        <img src={stock} className="App-logo" alt="logo" />
        
        <p>User 1 <span class="tab"></span> User 2 <span class="tab"></span> User 3</p>
        <div>
        <Ticker />
        </div>
        
        <Stock/>
        <p className="App-intro">;{ApiRes}</p>
        </div>
        
}


export default Home
