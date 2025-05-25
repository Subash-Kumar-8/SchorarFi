import React from 'react';
import './invester-find.css'; // Ensure this file exists and is named correctly

const InvestorFind = () => {
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
            <div className="navelements">Dashboard</div>
            <div className="navelements">Invested Projects</div>
            <div className="navelements" id="active">Fund Scholars</div>
            <div className="navelements">Projects</div>
          </div>
        </div>

        <div className="block">
          <div className="scholars">
            <h3>List Of Scholars</h3>
            <div className="one">
              <p>Subash Kumar</p>
              <img src="proposition-svgrepo-com.png" alt="Contact Icon" id="three" />
            </div>
            <div className="two">
              <p>Mohammed Mafaz</p>
              <img src="proposition-svgrepo-com.png" alt="Contact Icon" id="four" />
            </div>
            <div className="three">
              <p>Chelian</p>
              <img src="proposition-svgrepo-com.png" alt="Contact Icon" id="five" />
            </div>
          </div>

          <div className="projects">
            <h3>Click icon to contact investor</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorFind;
