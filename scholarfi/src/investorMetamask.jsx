import React from "react";
import "./Styles/investorMetamask.css";
import { useNavigate } from "react-router-dom";

const ScholarMetamask = () => {
  const navigate = useNavigate();
  return (
    <div className="body">
      <div className="header">
        <img src="scholarfi.svg" id="two" alt="ScholarFi Logo" />
        <h1>welcome subash kumar,</h1>
        <img src="profile-picture.png" id="one" alt="Profile" />
      </div>
      <div className="flex">
        <div className="all">
          <div className="navbar">
            <div className="navelements" onClick={()=> navigate('/"')}>Dasboard</div>
            <div className="navelements" onClick={()=> navigate('/')}>Invested Projects</div>
            <div className="navelements" onClick={()=> navigate('/')}>Fund Scholars</div>
            <div className="navelements" id="active" onClick={()=> navigate('/')}>Projects</div>
          </div>
        </div>
        <div className="block">
          <div className="backend">
            <h3>backend developer will add metamask</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarMetamask;
