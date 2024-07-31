import React from 'react';
import './Preloader.css'; // Create this CSS file to style the preloader

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner"></div> {/* You can use a spinner GIF or CSS animation */}
    </div>
  );
};

export default Preloader;
