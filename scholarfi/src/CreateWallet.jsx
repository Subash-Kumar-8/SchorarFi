import React from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./Contract/contract.js";
import "./Styles/CreateWallet.css";

const CreateWallet = () => {
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const userAddress = await signer.getAddress();
        console.log("Connected wallet:", userAddress);

        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          CONTRACT_ABI,
          signer
        );

        const isRegistered = await contract.isUserRegistered(userAddress);

        console.log("User is registered?", isRegistered);

        if (isRegistered) {
          navigate("/dashboard");
        } else {
          navigate("/investorSignup");
        }
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask not detected. Please install it.");
    }
  };

  return (
    <div className="page-container">
      <div className="header">
        <h1>Welcome to ScholarFi</h1>
        <p>Ready to fund other scholars?</p>
        <a href="">Sign in as investor</a>
      </div>
      <div className="wallet-button">
        <button onClick={connectWallet}>Join MetaMask</button>
      </div>
    </div>
  );
};

export default CreateWallet;
