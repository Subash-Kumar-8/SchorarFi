import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWallet from "./CreateWallet.jsx";
import Scholardashboard from "./ScholarDashboard.jsx";
import InvestorSignUp from "./investorSignup.jsx";
import ScholarSignUp from "./scholarSignup.jsx";
import CreateWallet from "./InvestorWallet.jsx";
import TandC from "./Terms.jsx";
import ScholarFi from "./landing.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScholarFi />} />
        <Route path="/scholarJoin" element={<ConnectWallet />} />
        <Route path="/scholarDashboard" element={<Scholardashboard />} />
        <Route path="/investorSignup" element={<InvestorSignUp />} />
        <Route path="/scholarSignup" element={<ScholarSignUp />} />
        <Route path="/investorJoin" element={<CreateWallet />} />
        <Route path="/T&C" element={<TandC />} />
      </Routes>
    </Router>
  );
}

export default App;
