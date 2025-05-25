import React, { useEffect, useState } from 'react';
import './Styles/scholar-project.css';
import usericon from "./assets/user.png";
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from "./Contract/contractPitchInput";

const Projects = () => {
  const navigate = useNavigate();
  const [myProjects, setMyProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!window.ethereum) return alert("Please install MetaMask");

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();

      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const projects = await contract.getAllProjects();

      const filtered = projects.filter(project => project.owner.toLowerCase() === userAddress.toLowerCase());
      setMyProjects(filtered);
    };

    fetchProjects();
  }, []);

  const handleShowDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="body">
      <div className="header">
        <img src="scholarfi.svg" alt="ScholarFi Logo" id="two" />
        <h1>Welcome Jayabalakumaran,</h1>
        <img src={usericon} alt="Profile" id="one" />
      </div>

      <div className="flex">
        <div className="all">
          <div className="navbar">
            <div className="navelements" onClick={() => navigate('/scholarDashboard')}>Dashboard</div>
            <div className="navelements" id="active" onClick={() => navigate('/scholarproject')}>Invested Projects</div>
            <div className="navelements" onClick={() => navigate('/fund')}>Fund Scholars</div>
            <div className="navelements" onClick={() => navigate('/projects')}>Metamask</div>
          </div>
        </div>

        <div className="block">
          <div className="scholars">
            <h3>Your current projects</h3>

            {myProjects.length > 0 ? (
              myProjects.map((project, index) => (
                <div className="one" key={index}>
                  <h3>{project.name}</h3>
                  <button onClick={() => handleShowDetails(project)}>See Full details &gt;</button>
                </div>
              ))
            ) : (
              <p>No current projects</p>
            )}

            <div className="title">
              <button type="submit" onClick={() => navigate('/pitchProject')}>
                Pitch New Projects
              </button>
            </div>
          </div>

          <div className="projects">
            <h3>Your Previous Projects</h3>
            <p>Nothing To Show..</p>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedProject.name}</h2>
            <p><strong>Description:</strong> {selectedProject.description}</p>
            <p>
              <strong>GitHub:</strong> <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                {selectedProject.githubLink}
              </a>
            </p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
