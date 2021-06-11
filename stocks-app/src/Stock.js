import React from 'react';
import Plot from 'react-plotly.js'; //$ npm install react-plotly.js plotly.js

class Stock extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            stockCharXValue : [],
            stockCharYValue : []
        }
    }

    componentDidMount(){
        this.fetchStock();
    }

    fetchStock(){
        const pointerToThis = this;
        const API_KEY = 'P7J8QW3O1K1CDRFJ';
        let StockSymbol = 'FB';
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        //API getting last 100 days of data
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        fetch(API_Call) 
          .then(
              function(res){
                  return res.json();
              }

          )
          .then(
            function(data){
                console.log('response data test')
                  console.log(data);

                  for( var key in data['Time Series (Daily)'])
                  {
                      stockChartXValuesFunction.push(key);
                      stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                  }
                  pointerToThis.setState(
                      {
                          stockCharXValue : stockChartXValuesFunction,
                          stockCharYValue : stockChartYValuesFunction
                      });
                  
                  //console.log(stockChartXValuesFunction)
                  //for testing 
              }

              
          )
    }

    render(){
        return(
            <div>
                <h1>
                    Stock Market
                    
                </h1>
                <Plot
                    data={[
                    {
                        x: this.state.stockCharXValue,
                        y: this.state.stockCharYValue,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    ]}
                    layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
                />

            </div>
        )
    }
}

export default Stock;