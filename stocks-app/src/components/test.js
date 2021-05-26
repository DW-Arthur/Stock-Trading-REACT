import React from 'react';
import {useEffect, useState} from 'react';

export const Hello = ()=> {
    const [initialState, setInitialState] = useState([])

    useEffect(()=>{
        fetch('api')
    })
}