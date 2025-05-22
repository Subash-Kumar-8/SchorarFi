import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const address = localStorage.getItem("userAddress");

    // Simulate checking registration (replace with real check later)
    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );
    const isRegistered = registeredUsers.includes(address);

    if (!isRegistered) {
      navigate("/signup");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Welcome to ScholarFi Dashboard</h2>
      <p>You're successfully connected!</p>
    </div>
  );
};

export default Dashboard;
