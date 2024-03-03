import React from 'react'
import { getFromLocalStorage } from '../utils/utilsFunctions'
import Signup from './signup/Signup';

const PrivateRoute = ({children}) => {
    const token = getFromLocalStorage("token");
    if(!token){
        return <Signup/>
    }
    return children;
  
}

export default PrivateRoute