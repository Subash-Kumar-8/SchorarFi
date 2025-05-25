import React from "react";
import "./scholarfind.css";

const ScholarFind = () => {
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
            <div className="navelements">Invested Projects</div>
            <div className="navelements" id="active">Fund Scholars</div>
            <div className="navelements">Projects</div>
          </div>
        </div>
        <div className="block">
          <div className="scholars">
            <h3>List Of Projects</h3>
            <div className="one">
              <p>songy</p>
              <img src="eye-with-pupil-svgrepo-com.png" id="three" alt="View Songy" />
            </div>
            <div className="two">
              <p>Comicdic</p>
              <img src="eye-with-pupil-svgrepo-com.png" id="four" alt="View Comicdic" />
            </div>
            <div className="three">
              <p>sleep2earn</p>
              <img src="eye-with-pupil-svgrepo-com.png" id="five" alt="View sleep2earn" />
            </div>
          </div>
          <div className="projects">
            <h3>Tap the icon to see details</h3>
            <p>Front end developer will add a model details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarFind;
