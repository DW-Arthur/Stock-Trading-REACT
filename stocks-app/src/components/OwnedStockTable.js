import React, {Component} from 'react'

class OwnedStockTable extends Component{

    constructor(props){
        super(props)
        this.state = {
            stockOwned: props.stockOwned
        }
    }

    renderTableData(){
        let keys = Object.keys(this.state.stockOwned)

        return keys.map((key) =>{
            const num= this.state.stockOwned[key]

            return(
                <tr >
               <td>{key}</td>
               <td>{num}</td>
            </tr>
            )
        
        })
    }

    render(){

        return(
            <div>
                <h1 class="display-6">Share Owned</h1>

                <table class="table table-hover table-dark" id='stock-owned-table'>
                    <tbody>
                        <tr>
                            <th>Stock Name</th>
                            <th>Number Owned</th>
                        </tr>
                        {this.renderTableData()}
                        </tbody>
                    
                </table>
            </div>
        )
    }
}


export default OwnedStockTable