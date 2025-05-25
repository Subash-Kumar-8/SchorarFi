import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWallet from "./CreateWallet.jsx";
import Scholardashboard from "./scholarDasboard.jsx";
import InvestorSignUp from "./investorSignup.jsx";
import ScholarSignUp from "./scholarSignup.jsx";
import CreateWallet from "./InvestorWallet.jsx";
import TandC from "./Terms.jsx";
import ScholarFi from "./landing.jsx";
import Projects from "./scholarProjects.jsx";
import PitchProjectForm from "./pitchInput.jsx";
import InvestorFind from "./investorFind.jsx";
import ScholarMetamask from "./scholarMetamask.jsx";
import InvestorDashboard from "./investerDasboard.jsx"
import InvesterProjects from "./inveterprojects.jsx";
import ScholarFund from "./scholarfund.jsx";
import InvestorMetamask from "./investorMetamask.jsx";

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
        <Route path="/scholarproject" element={<Projects />} />
        <Route path="/pitchproject" element={<PitchProjectForm />} />
        <Route path="/findinvestor" element={<InvestorFind />} />
        <Route path="/scholarmetamask" element={<ScholarMetamask />} />
        <Route path="/investordashboard" element={<InvestorDashboard />} />
        <Route path="/investedprojects" element={<InvesterProjects />} />
        <Route path="/fundscholar" element={<ScholarFund />} />
        <Route path="/investormetamask" element={<InvestorMetamask />} />
        <Route path="/T&C" element={<TandC />} />
      </Routes>
    </Router>
  );
}

export default App;
