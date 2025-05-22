import React from "react";
import { useNavigate } from "react-router-dom";

const ConnectWallet = () => {
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        console.log("Connected:", accounts[0]);
        localStorage.setItem("userAddress", accounts[0]);
        navigate("/dashboard");
      } catch (error) {
        console.error("Connection rejected:", error);
      }
    } else {
      alert("MetaMask not detected. Please install it to continue.");
    }
  };

  return <button onClick={connectWallet}>Join MetaMask</button>;
};

export default ConnectWallet;
