import React, { useState } from 'react';
import './Styles/investerDasboard.css'; 
import chat from "./assets/chat.png";
import user from "./assets/user.png";
import { useNavigate } from 'react-router-dom';

const InvestorDashboard = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [selectedScholar, setSelectedScholar] = useState('');
  const [message, setMessage] = useState('');
  const [sentMessage, setSentMessage] = useState('');

  const handleChatClick = (scholarName) => {
    setSelectedScholar(scholarName);
    setShowPopup(true);
    setMessage('');
    setSentMessage('');
  };

  const handleSend = () => {
    setSentMessage(message);
    setMessage('');
    setShowPopup(false);
  };

  return (
    <div className="body">
      <div className="header">
        <img src="scholarfi.svg" alt="ScholarFi Logo" id="two" />
        <h1>Welcome Subash Kumar,</h1>
        <img src={user} alt="Profile" id="one" />
      </div>

      <div className="flex">
        <div className="all">
          <div className="navbar">
            <div className="navelements" id="active" onClick={() => navigate('/investordashboard')}>Dashboard</div>
            <div className="navelements" onClick={() => navigate('/investedprojects')}>Invested Projects</div>
            <div className="navelements" onClick={() => navigate('/fundscholar')}>Fund Scholars</div>
            <div className="navelements" onClick={() => navigate('/investormetamask')}>Metamask</div>
          </div>
        </div>

        <div className="block">
          <div className="scholars">
            <h3>List Of Scholars</h3>
            <div className="one">
              <img src={user} alt="Scholar 1" id="three" />
              <p>jayabalakumaran</p>
              <img
                src={chat}
                alt="Chat Icon"
                id="four"
                style={{ cursor: "pointer" }}
                onClick={() => handleChatClick('jayabalakumaran')}
              />
            </div>

            <div className="two">
              <img src={user} alt="Scholar 2" id="five" />
              <p>Scholar_abc</p>
              <img
                src={chat}
                alt="Chat Icon"
                id="six"
                style={{ cursor: "pointer" }}
                onClick={() => handleChatClick('Scholar_abc')}
              />
            </div>
          </div>

          <div className="projects">
            <h3>{selectedScholar}'s progress</h3>
            <div className="barout">
              <div className="barlevel" style={{ width: '80%', backgroundColor: 'green', color: 'white' }}>80%</div>
            </div>
            {sentMessage && (
              <div className="message-box">
                <h4>Message Sent to {selectedScholar}:</h4>
                <p>{sentMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Send Message to {selectedScholar}</h3>
            <input
              type="text"
              value={message}
              placeholder="Type your message..."
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
            <button onClick={() => setShowPopup(false)} style={{ marginLeft: '10px' }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorDashboard;
