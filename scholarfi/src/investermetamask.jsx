import React from "react";
import "./investormetamask.css";

const InvestorMetaMask = () => {
  return (
    <div className="body">
      <div className="header">
        <img src="scholarfi.svg" id="two" alt="ScholarFi Logo" />
        <h1>welcome jayabalakumaran,</h1>
        <img src="profile-picture.png" id="one" alt="Profile" />
      </div>
      <div className="flex">
        <div className="all">
          <div className="navbar">
            <div className="navelements">Dasboard</div>
            <div className="navelements">Invested Projects</div>
            <div className="navelements">Fund Scholars</div>
            <div className="navelements" id="active">Projects</div>
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

export default InvestorMetaMask;
