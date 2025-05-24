import React from "react";
import { ethers } from "ethers";
import {
  SIGNUP_CONTRACT_ADDRESS,
  SIGNUP_CONTRACT_ABI,
} from "./Contract/contractsignup";
import { useNavigate } from "react-router-dom";
import "./Styles/scholarSignup.css";

export default function ScholarSignUp() {
  const navigate = useNavigate();
  const address = localStorage.getItem("userAddress");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const agreeToTerms = e.target.agree.checked;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!agreeToTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    try {
      if (!window.ethereum) {
        alert("MetaMask not detected");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const network = await provider.getNetwork();
      console.log("Connected to chain ID:", network.chainId);

      if (network.chainId !== 44787) {
        alert("Please switch to the Celo Alfajores testnet in MetaMask.");
        return;
      }

      const contract = new ethers.Contract(
        SIGNUP_CONTRACT_ADDRESS,
        SIGNUP_CONTRACT_ABI,
        signer
      );

      const tx = await contract.createAccount(name, email, password, true);
      await tx.wait();

      alert("Account created successfully!");
      navigate("/scholardashboard");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed: " + (error?.message || "unknown error"));
    }
  };

  return (
    <div>
      <div className="signin">
        <h1>Welcome to Scholar sign-in Page</h1>
        <div className="text-right">
          <p>Ready to fund other scholar?</p>
          <a href="investorJoin">Sign-in as Investor</a>
        </div>
      </div>

      <div className="box">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            required
          />

          <div className="flex items-center mb-4">
            <input type="checkbox" id="agree" required />
            <label htmlFor="agree">
              Hereby, I agree to the <a href="/T&C">Terms & conditions</a>
            </label>
          </div>

          <div className="account-botton">
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}
