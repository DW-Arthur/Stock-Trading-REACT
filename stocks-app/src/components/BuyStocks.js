import React, { Component } from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  textField: {
    '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
    },
    background: 'white',
  },
  input: {
    color: 'black'
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
      color: 'black'
    },
  },
}));



export default function ShopNow() {
  const classes = useStyles();


  return( 

      <span>

      
        <form className={classes.textField} noValidate autoComplete="off">
            <TextField 
            InputProps={{
            className: classes.input,}}
            id="stock-name" label="Stock Name" variant="filled" />

            <TextField 
            InputProps={{
            className: classes.input,}}
            id="stock-amount" label="Stock Amount" variant="filled" />
            
        </form>
        
        <div className={classes.button}>
            <Button variant="contained">
                BUY
            </Button>
            <Button variant="contained">
                SELL
            </Button>
        </div>
    
    
    <h1> In Buy Stocks Mode </h1>



    </span>




    );








}


