// src/Components/Loading/LoadingAnimation.jsx
import React from 'react';
import './LoadingAnimation.css'; // Styling in a separate CSS file

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Getting things ready for you...</p>
    </div>
  );
};

export default LoadingAnimation;
