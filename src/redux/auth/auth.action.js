import axios from "axios";
import  * as types from "../actionType";
import { setToLocalStorage } from "../../utils/utilsFunctions";

 const signup_pending = () => {
    return {type:types.SIGNUP_PENDING}
};

const signup_success = (payload) => {
    return {type:types.SIGNUP_SUCCESS,payload:payload}
};

const signup_failure = () => {
    return {type:types.SIGNUP_FAILURE}
};

const login_pending = () => {
    return {type:types.LOGIN_PENDING}
};

const login_success = (payload) => {
    return {type:types.LOGIN_SUCCESS,payload}
};

const login_failure = () => {
    return {type:types.LOGIN_FAILURE}
};


export const signup = (userData) => async(dispatch) =>{
    dispatch(signup_pending());
   try {
    let res = await axios.post(`https://staging.fastor.in/v1/pwa/user/register`,userData)
    console.log(res.data);
    dispatch(signup_success(res.data));
   } catch (error) {
    dispatch(signup_failure())
   }
}

export const login = (userData) => async(dispatch) =>{
    // const formData = new URLSearchParams(userData).toString();
    dispatch(login_pending());
 try {
 let res = await axios.post(`https://staging.fastor.in/v1/pwa/user/login`,userData)
    console.log(res?.data,"res from login");
    setToLocalStorage("token",res?.data?.data.token)
    dispatch(login_success(res?.data));
 } catch (error) {
    dispatch(login_failure());
 }
}
 
