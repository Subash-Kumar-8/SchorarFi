import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWallet from "./CreateWallet.jsx";
import Dashboard from "./Dashboard.jsx";
import Signup from "./Signup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConnectWallet />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
