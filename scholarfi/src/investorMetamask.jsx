import React, { useEffect, useState } from "react";
import "./Styles/investorMetamask.css";
import { useNavigate } from "react-router-dom";
import user from "./assets/user.png"

const InvestorMetamask = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
    const [network, setNetwork] = useState(null);
    const [error, setError] = useState("");
  
    const connectWallet = async () => {
      try {
        if (!window.ethereum) {
          setError("MetaMask is not installed.");
          return;
        }
  
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
  
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        setNetwork(chainId);
      } catch (err) {
        setError("Failed to connect MetaMask.");
      }
    };
  
    useEffect(() => {
      connectWallet();
    }, []);
  return (
    <div className="body">
      <div className="header">
        <img src="scholarfi.svg" id="two" alt="ScholarFi Logo" />
        <h1>welcome subash kumar,</h1>
        <img src={user} id="one" alt="Profile" />
      </div>
      <div className="flex">
        <div className="all">
          <div className="navbar">
            <div className="navelements" onClick={()=> navigate('/investordashboard')}>Dasboard</div>
            <div className="navelements" onClick={()=> navigate('/investedprojects')}>Invested Projects</div>
            <div className="navelements" onClick={()=> navigate('/fundscholar')}>Fund Scholars</div>
            <div className="navelements" id="active" onClick={()=> navigate('/investormetamask')}>Projects</div>
          </div>
        </div>
        <div className="block">
          <div className="backend">
            <h3>MetaMask Details</h3>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {account ? (
              <>
                <p><strong>Connected Account:</strong> {account}</p>
                <p><strong>Network Chain ID:</strong> {network}</p>
              </>
            ) : (
              <p>Connecting to MetaMask...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorMetamask;
