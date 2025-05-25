import React from "react";
import "./investerprojects.css";

const InvesterProjects = () => {
  return (
    <div className="body">
      <div className="header">
        <img src="scholarfi.svg" id="two" alt="ScholarFi Logo" />
        <h1>welcome subash kumar,</h1>
        <img src="profile-picture.png" id="one" alt="Profile" />
      </div>
      <div className="flex">
        <div className="all">
          <div className="navbar">
            <div className="navelements">Dasboard</div>
            <div className="navelements" id="active">Invested Projects</div>
            <div className="navelements">Fund Scholars</div>
            <div className="navelements">Projects</div>
          </div>
        </div>
        <div className="block">
          <div className="scholars">
            <h3>Invested Projects</h3>
            <div className="one">
              <p>Scholarfi</p>
              <img src="rising.png" id="three" alt="Scholarfi project" />
            </div>
            <div className="two">
              <p>scholarfi</p>
              <img src="rising.png" id="four" alt="Scholarfi project" />
            </div>
            <div className="three">
              <p>scholarfi</p>
              <img src="rising.png" id="five" alt="Scholarfi project" />
            </div>
          </div>
          <div className="projects">
            <h3>Tap the icon to see details</h3>
            <p>Front end developer will add a modal details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvesterProjects;
