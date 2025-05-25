import React, { useState } from "react";
import "./Styles/scholarfind.css";
import { useNavigate } from "react-router-dom";
import user from "./assets/user.png";
import monitor from "./assets/eye-with-pupil-svgrepo-com.png";

const ScholarFund = () => {
  const navigate = useNavigate();
  const [projectDetail, setProjectDetail] = useState("");

  const handleViewDetails = (projectName) => {
    const details = {
      Comicdesk: "Comicdesk is a comic drawing platform.",
      Songy: "Songy is a platform where you can sing and post.",
      Sleep2Earn: "Sleep2Earn is a sleep-tracking platform where you can earn Celo by sleeping.",
    };

    setProjectDetail(details[projectName]);
  };

  return (
    <div className="body">
      <div className="header">
        <img src="scholarfi.svg" id="two" alt="ScholarFi Logo" />
        <h1>Welcome Subash Kumar,</h1>
        <img src={user} id="one" alt="Profile" />
      </div>
      <div className="flex">
        <div className="all">
          <div className="navbar">
            <div className="navelements" onClick={() => navigate('/investordashboard')}>Dashboard</div>
            <div className="navelements" onClick={() => navigate('/investedprojects')}>Invested Projects</div>
            <div className="navelements" id="active" onClick={() => navigate('/fundscholar')}>Fund Scholars</div>
            <div className="navelements" onClick={() => navigate('/investormetamask')}>Metamask</div>
          </div>
        </div>
        <div className="block">
          <div className="scholars">
            <h3>List Of Projects</h3>

            <div className="one">
              <p>Comicdesk</p>
              <img
                src={monitor}
                id="three"
                alt="View Comicdesk"
                style={{ cursor: "pointer" }}
                onClick={() => handleViewDetails("Comicdesk")}
              />
            </div>

            <div className="two">
              <p>Songy</p>
              <img
                src={monitor}
                id="four"
                alt="View Songy"
                style={{ cursor: "pointer" }}
                onClick={() => handleViewDetails("Songy")}
              />
            </div>

            <div className="three">
              <p>Sleep2Earn</p>
              <img
                src={monitor}
                id="five"
                alt="View Sleep2Earn"
                style={{ cursor: "pointer" }}
                onClick={() => handleViewDetails("Sleep2Earn")}
              />
            </div>
          </div>

          <div className="projects">
            <h3>Tap the icon to see details</h3>
            <p>{projectDetail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarFund;
