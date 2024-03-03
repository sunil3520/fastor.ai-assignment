import React from "react";

const Label = ({ isSignIn }) => {
  return (
    <div className=" w-[95%] flex flex-col items-left">
      {isSignIn ? (
        <div>
          <p className="font-Urbanist text-[26px] font-bold text-[#1E232C]">
            OTP Varification
          </p>
          <p className="font-Urbanist text-[#8391A1]">
            Enter the verification code we just sent on your Mobile Number.
          </p>
        </div>
      ) : (
        <div>
          <p className="font-Urbanist text-[26px] font-bold text-[#1E232C]">
          Enter Your Mobile Number
          </p>
          <p className="font-Urbanist text-[#8391A1]">
          We will send you the 4 digit verification conde
          </p>
        </div>
      )}
    </div>
  );
};

export default Label;
