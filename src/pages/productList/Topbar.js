import React from "react";
import { removeTokenFromLocalStorage } from "../../utils/utilsFunctions";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () =>{
    removeTokenFromLocalStorage("token")
    navigate("/")
  }

  return (
    <div className="shadow-lg p-2">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[#838BA1] font-semibold">Pre Order From</p>
          <p className="font-bold">Connaught Place</p>
        </div>
        <button onClick={handleLogout} className="bg-slate-400 rounded-md p-2">LOGOUT</button>
      </div>
    </div>
  );
};

export default Topbar;
