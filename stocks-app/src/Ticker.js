import React from 'react'

function Ticker() {
    var unirest = require("unirest");

    var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary");

    req.query({
	    "symbol": "AMRN",
	    "region": "US"
    });

    req.headers({
        "x-rapidapi-key": "70313c84c2mshc8a9fd480b134d2p1a5053jsn246129d85203",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "useQueryString": true
    });

    var price 
    test = "1234"
    req.end(function (res) {
        
        if (res.error) throw new Error(res.error);
        price = res.body
        test = price.quoteType.symbol
    });

    return(
        <div>
            {}
        </div>
         )
 }
export default Ticker