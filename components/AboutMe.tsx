import React from 'react';

interface AboutMeProps {
  text: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default AboutMe;
