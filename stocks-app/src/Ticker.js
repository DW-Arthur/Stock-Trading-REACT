import React, {useState} from 'react'

function Ticker() {
<<<<<<< HEAD
=======

    const [stockName, setStockName] = useState(0);

>>>>>>> 785dee21de36c76c6243daabafbac25b42ecf0e9
    
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
<<<<<<< HEAD
    var test2 = "1232"
=======
>>>>>>> 785dee21de36c76c6243daabafbac25b42ecf0e9

    req.end(function (res) {
        
        if (res.error) throw new Error(res.error);

        console.log(res.body);
        price= res.body
        test = console.log(price.quoteType.symbol)
<<<<<<< HEAD
        window.test2 = price.quoteType.longName
        console.log(window.test2)
=======
        setStockName(price.quoteType.exchange)

>>>>>>> 785dee21de36c76c6243daabafbac25b42ecf0e9
    });
    

    return(
        <div>
<<<<<<< HEAD
            SPY: {window.test2}
=======
            SPY: {stockName}
>>>>>>> 785dee21de36c76c6243daabafbac25b42ecf0e9
        </div>
         )
 }
export default Ticker