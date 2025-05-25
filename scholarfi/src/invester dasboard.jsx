import React from 'react';
import './invester-dashboard.css'; // Make sure the filename matches exactly

const InvestorDashboard = () => {
  return (
    <div className="body">
      <div className="header">
        <img src="scholarfi.svg" alt="ScholarFi Logo" id="two" />
        <h1>Welcome Subash Kumar,</h1>
        <img src="profile-picture.png" alt="Profile" id="one" />
      </div>

      <div className="flex">
        <div className="all">
          <div className="navbar">
            <div className="navelements" id="active">Dashboard</div>
            <div className="navelements">Invested Projects</div>
            <div className="navelements">Fund Scholars</div>
            <div className="navelements">Projects</div>
          </div>
        </div>

        <div className="block">
          <div className="scholars">
            <h3>List Of Scholars</h3>
            <div className="one">
              <img src="user.png" alt="Scholar 1" id="three" />
              <p>jayabalakumaran</p>
              <img src="chat.png" alt="Chat Icon" id="four" />
            </div>
            <div className="two">
              <img src="user.png" alt="Scholar 2" id="five" />
              <p>Scholar_abc</p>
              <img src="chat.png" alt="Chat Icon" id="six" />
            </div>
          </div>

          <div className="projects">
            <h3>jayabalakumaran's progress</h3>
            <div className="barout">
              <div className="barlevel" style={{ width: '80%', color: 'green' }}>80%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;
