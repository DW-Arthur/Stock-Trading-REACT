import React, {useState} from 'react'

function Ticker() {

    const [stockName, setStockName] = useState(0);

    
    var unirest = require("unirest");

    var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary");

    req.query({
	    "symbol": "SPY",
	    "region": "US"
    });

    req.headers({
        "x-rapidapi-key": "70313c84c2mshc8a9fd480b134d2p1a5053jsn246129d85203",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "useQueryString": true
    });

    var price
    var test = ""

    req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
        price= res.body
        test = console.log(price.quoteType.symbol)
        setStockName(price.quoteType.exchange)
    });
    

    return(
        <div>
            SPY: {stockName}
        </div>
         )
 }
export default Ticker