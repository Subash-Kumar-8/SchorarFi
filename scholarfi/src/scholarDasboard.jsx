import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import './Styles/scholar-dasboard.css';
import usericon from "./assets/user.png";

const ScholarDashboard = () => {
  const navigate = useNavigate();

  // Sample project (replace with actual fetched data)
  const [project] = useState({
    name: 'ScholarFi',
    description: 'A decentralized platform for research funding and tracking.',
    githubLink: 'https://github.com/yourusername/scholarfi',
  });

  const [showModal, setShowModal] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log("Connected:", address);
      } catch (error) {
        console.error("Wallet connection failed", error);
      }
    } else {
      alert("MetaMask not detected");
    }
  };

  return (
    <div className="body">
      <div className="header">
        <h1>Welcome Jayabalakumaran,</h1>
        <img src={usericon} alt="Profile" id="one" />
      </div>

      <div className="flex">
        <div className="all">
          <div className="navbar">
            <div className="navelements" id="active" onClick={() => navigate('/scholarDashboard')}>Dashboard</div>
            <div className="navelements" onClick={() => navigate('/scholarproject')}>Invested Projects</div>
            <div className="navelements" onClick={() => navigate('/fund')}>Fund Scholars</div>
            <div className="navelements" onClick={connectWallet}>Metamask</div>
          </div>
        </div>

        <div className="block">
          <div className="add"></div>

          <div className="scholars">
            <h3>Your current projects</h3>
            <div className="one">
              <h3>{project.name}</h3>
              <button
                onClick={() => setShowModal(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#007bff',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: 'inherit'
                }}
              >
                See Full details &gt;
              </button>
            </div>
          </div>

          <div className="projects">
            <h3>Your Previous Projects</h3>
            <p>Nothing To Show..</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>{project.name}</h2>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>GitHub:</strong> <a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.githubLink}</a></p>
            <button onClick={() => setShowModal(false)} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Basic inline styles for the modal
const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    width: '80%',
    maxWidth: '500px',
    textAlign: 'left'
  },
  closeButton: {
    marginTop: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default ScholarDashboard;
