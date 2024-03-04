import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Label from "../../components/Label";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../../redux/auth/auth.action";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../utils/utilsFunctions";


const Signup = () => {
    const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dialCode, setDidalCode] = useState("+91");
  const [isSignIn,setIsSignIn] = useState(false);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const AuthData = useSelector((store)=>console.log(store.authReducer))
 console.log(AuthData,"AuthData")
  const handleInputChange = (e) => {
    let inputValue = e.target.value.replace(/\D/g, "");
    inputValue = inputValue.slice(0, 10);
    setPhoneNumber(inputValue);
  };

  const handleDialCode = (e) => {
    let inputValue = e.target.value.replace(/[^0-9+]/g, "");
    inputValue = inputValue.slice(0, 3);
    setDidalCode(inputValue);
  };

  const handleOtpChange = (index, value,event) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  
    console.log(newOtpValues,"newOtopValue")
    if (value.length === 0 && index > 0) {
      // If the value is empty and not the first input, move focus to the previous input
      document.getElementById(`code-${index - 1}`).focus();
    } else if (value.length > 0 && index < 5) {
      // If the value is not empty and not the last input, move focus to the next input
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSignupAndLogin = () =>{
    if(!isSignIn){
      dispatch(signup({phone:phoneNumber,dial_code:dialCode}))
      setIsSignIn(true);
    }
     

    if(isSignIn ){
       const otp = otpValues.join("")
        dispatch(login({phone:"1236547890",otp:otp,dial_code:"+91"}))
        navigate("/products")
    }

  }

  const token = getFromLocalStorage("token")
  console.log(token,"token")
  useEffect(()=>{
  if(token){
    navigate("/products")
  }
  navigate("/")
  },[token])

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className=" w-[95%] flex flex-col items-center">
      <Label
        isSignIn={isSignIn}
      />
        <div className="mt-[30px] w-[90%] m-[auto]">
          { !isSignIn?<div className="flex">
            <input
              type="text"
              maxLength={3}
              placeholder="+91"
              value={dialCode}
              onChange={handleDialCode}
              className="w-16 p-3 text-[20px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 flex-1"
            />

            <input
              type="text"
              maxLength={10}
              placeholder="Enter dial code and phone number"
              value={phoneNumber}
              onChange={handleInputChange}
              className=" p-3 text-[20px] tracking-widest block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
           
          </div>:
           <form className="max-w-sm mx-auto">
           <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
           {otpValues.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  id={`code-${index}`}
                  required
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value,e)}
                  className="p-3 text-[20px] tracking-widest block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              ))}
           </div>
          
         </form>
          }
        </div>
      </div>
      <Button handleSignupAndLogin={handleSignupAndLogin}>{isSignIn? "Verify":"Send Code"}</Button>
      {isSignIn && <p className="mt-5 font-Urnbanist text-[15px] font-semibold">
        Didn’t received code?{" "}
        <span className="font-Poppins font-semibold text-green-900">
          Resend
        </span>
      </p>}
    </div>
  );
};

export default Signup;
