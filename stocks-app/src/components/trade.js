import React from 'react'
import  '../css/trade.css'
import User from './User'
import OwnedStockTable from './OwnedStockTable'

//api Key 7MOHG7MBYJFDK1B0 P7J8QW3O1K1CDRFJ UV061TUYSU2NNPKK PV3L7WTROWJEOE6F
function Trade() {
    
    let user1 = new User("User1", 10000);
    user1.buy('facebook',  3)
    user1.buy('addidas', 2)

    let stockArr = ["MSFT", "FB","AMZN"]
    let pricedict = {}
    let i =0
    console.log("we are here")
    for (const key in stockArr){
        console.log(key)
        let price = 0
        const API_KEY = i>1 ? 'P7J8QW3O1K1CDRFJ' : 'UV061TUYSU2NNPKK';
        i++
        console.log(API_KEY)
        let StockSymbol = stockArr[key]
        

        console.log("we are here second")
            let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
            console.log("representing api call once")
            fetch(API_Call) 
                .then(
                    function(res){
                        console.log("we in the first then block")
                        if(res.ok){
                            return res.json();}
                            const error = new Error('reached API call limit');
                            throw error;

                }

          ).then(
            function(data){ 
                console.log("we in the final then block")
                let keys = Object.keys(data['Time Series (Daily)'])
                let firstkey = keys[0]
                price = data['Time Series (Daily)'][firstkey]['1. open']
                console.log(StockSymbol+": "+price)
                  //console.log(stockChartXValuesFunction)
                  //for testing 
              }
          )
        


        console.log("we are here three")
        pricedict[stockArr[key]] = price
    }

    return(
        <div className='trade-class'>
            <h1 class="display-2">Trading Page</h1>
            <div>
                
            <h3 class="blockquote">User: {user1.getName()}   Money: ${user1.getMoney()} </h3>
            <h4>price for one of them is {pricedict["FB"]}</h4>
            </div>
            
            <OwnedStockTable stockOwned = {user1.getStockOwned()}></OwnedStockTable>

        </div>
    )
}
export default Trade