import React, { useEffect, useState } from "react";
import "./Styles/scholarMetamask.css";
import { useNavigate } from "react-router-dom";

const ScholarMetaMask = () => {
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
        <h1>Welcome Jayabalakumaran,</h1>
        <img src="profile-picture.png" id="one" alt="Profile" />
      </div>

      <div className="flex">
        <div className="all">
          <div className="navbar">
            <div className="navelements" onClick={() => navigate("/scholarDashboard")}>Dashboard</div>
            <div className="navelements" onClick={() => navigate("/scholarproject")}>Projects</div>
            <div className="navelements" onClick={() => navigate("/findinvestor")}>Find Investor</div>
            <div className="navelements" id="active" onClick={() => navigate("/scholarmetamask")}>Metamask</div>
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

export default ScholarMetaMask;
