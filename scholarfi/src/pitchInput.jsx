import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import './Styles/pitchInput.css';
import { contractAddress, contractABI } from './Contract/contractPitchInput';  

const PitchProjectForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    github: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.ethereum) {
      alert('MetaMask is required to pitch a project');
      return;
    }

    try {
      setLoading(true);

      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const tx = await contract.pitchProject(
        formData.name,
        formData.description,
        formData.github
      );

      await tx.wait();

      alert('Project pitched successfully!');
      setFormData({ name: '', description: '', github: '' });
      navigate('/scholarProject')
    } catch (error) {
      console.error('Error pitching project:', error);
      alert('Failed to pitch project. See console for details.');
      navigate('/scholarProject')
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pitch-form-container">
      <h2 className="pitch-form-title">Pitch Your Project</h2>
      <form onSubmit={handleSubmit} className="pitch-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name of Project</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">Project Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="form-textarea"
            value={formData.description}
            onChange={handleChange}
            required
            disabled={loading}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="github" className="form-label">GitHub Link</label>
          <input
            type="url"
            id="github"
            name="github"
            className="form-input"
            value={formData.github}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Submitting...' : 'Pitch Project'}
        </button>
      </form>
    </div>
  );
};

export default PitchProjectForm;
