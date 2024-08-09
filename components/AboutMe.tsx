import React from 'react';

interface AboutMeProps {
  text: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ text }) => {
  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
