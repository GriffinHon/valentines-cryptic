import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-page">
      {/* Large heading */}
      <h1 className="intro-heading">Valentine's Cryptic</h1>
      {/* Centered box with message and button */}
      <div className="intro-box">
        <p>Every morning, you solve a puzzle. Today, solve this one for me.</p>
        <button className="play-button" onClick={() => navigate('/game')}>
          Play
        </button>
      </div>
    </div>
  );
};

export default IntroPage;