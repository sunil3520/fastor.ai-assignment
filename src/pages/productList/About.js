import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { LuWallet } from "react-icons/lu";
const About = () => {
  return (
    <div className=" mt-5 items-start flex p-[5%]">
      <div className="w-[50%]">
        <h3 className="text-[#838BA1] text-2xl font-semibold ">Karan</h3>
        <p className="font-bold">Let's explore this evening'</p>
      </div>
      <div className="flex w-[50%] gap-5">
        <div className="">
          <div className="bg-[#ff00008f] p-[8px] rounded-2xl">
            <BiSolidOffer className="text-4xl text-[white]" />
          </div>
          <p className="text-[#838BA1]">Offers</p>
        </div>
        <div>
          <div className="bg-[#476dc5] p-[8px] rounded-2xl">
            <LuWallet className="text-4xl text-[white]" />
          </div>
          <p className="text-[#838BA1]">Wallet</p>
        </div>
      </div>
    </div>
  );
};

export default About;
