import React from 'react';
import './scholar-dashboard.css'; 
const ScholarDashboard = () => {
  return (
    <div className="body">
      <div className="header">
        <img src="scholarfi.svg" alt="ScholarFi Logo" id="two" />
        <h1>Welcome jayabalakumaran,</h1>
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
          <div className="add">
            <img src="Add.png" alt="Add New" id="three" />
          </div>

          <div className="scholars">
            <h3>Your current projects</h3>
            <div className="one">
              <h3>ScholarFi</h3>
              <a href="#">See Full details &gt;</a>
            </div>
          </div>

          <div className="projects">
            <h3>Your Previous Projects</h3>
            <p>Nothing To Show..</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarDashboard;
