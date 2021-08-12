import React, { useState } from 'react'
import  '../css/trade.css'

function Trade() {
    const [stockInfo, setStockInfo] = useState({
        stockName:'',
        stockShares:''
    })


    return(
        <div className='trade-class'>
            <h1>This is the page that we do all the trading.</h1>
        </div>
    )
}
export default Trade