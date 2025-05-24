import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWallet from "./CreateWallet.jsx";
import Dashboard from "./Dashboard.jsx";
import InvestorSignUp from "./investorSignup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConnectWallet />} />
        <Route path="/scholardashboard" element={<Dashboard />} />
        <Route path="/investorSignup" element={<InvestorSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
