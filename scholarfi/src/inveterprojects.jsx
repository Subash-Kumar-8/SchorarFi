import React, { useState } from "react";
import "./Styles/investerprojects.css";
import { useNavigate } from "react-router-dom";
import details from "./assets/rising.png";
import user from "./assets/user.png"

const InvesterProjects = () => {
  const navigate = useNavigate();

  const [projectDescription, setProjectDescription] = useState("");

  const handleDetailsClick = () => {
    setProjectDescription(
      "ScholarFi is a decentralized platform that connects scholars with investors. Scholars pitch research ideas and get funding, while investors can track progress and engage transparently using blockchain technology."
    );
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
            <div className="navelements" id="active" onClick={() => navigate('/investedprojects')}>Invested Projects</div>
            <div className="navelements" onClick={() => navigate('/fundscholar')}>Fund Scholars</div>
            <div className="navelements" onClick={() => navigate('/investormetamask')}>Metamask</div>
          </div>
        </div>

        <div className="block">
          <div className="scholars">
            <h3>Invested Projects</h3>

            <div className="one">
              <p>ScholarFi</p>
              <img
                src={details}
                id="three"
                alt="ScholarFi project"
                style={{ cursor: "pointer" }}
                onClick={handleDetailsClick}
              />
            </div>

            <div className="two">
              <p>ScholarFi</p>
              <img
                src={details}
                id="four"
                alt="ScholarFi project"
                style={{ cursor: "pointer" }}
                onClick={handleDetailsClick}
              />
            </div>

            <div className="three">
              <p>ScholarFi</p>
              <img
                src={details}
                id="five"
                alt="ScholarFi project"
                style={{ cursor: "pointer" }}
                onClick={handleDetailsClick}
              />
            </div>
          </div>

          <div className="projects">
            <h3>Tap the icon to see details</h3>
            <p>{projectDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvesterProjects;
