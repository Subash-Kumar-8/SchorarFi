import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const address = localStorage.getItem("userAddress");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const field = e.target.field.value;

    console.log("Signup Data:", { name, field });

    // Save registration (local for now)
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    localStorage.setItem(
      "registeredUsers",
      JSON.stringify([...users, address])
    );

    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Scholar Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name: <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Field of Research: <input type="text" name="field" required />
        </label>
        <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
