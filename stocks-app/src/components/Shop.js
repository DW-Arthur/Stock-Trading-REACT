import React, { Component } from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  textField: {
    color: 'red'
  },
  input: {
    color: 'white'
  },
}));



export default function ShopNow() {
  const classes = useStyles();


  return( 
      <span>
    <h1> Shop Now </h1>
    </span>
    );
}


