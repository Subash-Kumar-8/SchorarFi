import React from 'react';
import "./Styles/investerFind.css";
import { useNavigate } from 'react-router-dom';
// import requestIcon from './assets/request-icon.png'; 

const InvestorFind = () => {
  const navigate = useNavigate();

  const handleRequestClick = (name) => {
    alert(`Requested ${name} to fund.`);
  };

  return (
    <div className="body">
      <div className="header">
        <img src="scholarfi.svg" alt="ScholarFi Logo" id="two" />
        <h1>Welcome Jayabalakumaran,</h1>
        <img src="profile-picture.png" alt="Profile" id="one" />
      </div>

      <div className="flex">
        <div className="all">
          <div className="navbar">
            <div className="navelements" onClick={() => navigate('/scholarDashboard')}>Dashboard</div>
            <div className="navelements" onClick={() => navigate('/scholarproject')}>Projects</div>
            <div className="navelements" id="active" onClick={() => navigate('/findinvestor')}>Find Investor</div>
            <div className="navelements" onClick={() => navigate('/scholarmetamask')}>Metamask</div>
          </div>
        </div>

        <div className="block">
          <div className="scholars">
            <h3>List Of Scholars</h3>

            <div className="one">
              <p>Subash Kumar</p>
              <img
                // src={requestIcon}
                alt="Request Icon"
                id="three"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRequestClick('Subash Kumar')}
              />
            </div>

            <div className="two">
              <p>Mohammed Mafaz</p>
              <img
                // src={requestIcon}
                alt="Request Icon"
                id="four"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRequestClick('Mohammed Mafaz')}
              />
            </div>

            <div className="three">
              <p>Chelian</p>
              <img
                // src={requestIcon}
                alt="Request Icon"
                id="five"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRequestClick('Chelian')}
              />
            </div>
          </div>

          <div className="projects">
            <h3>Request sent to</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorFind;
