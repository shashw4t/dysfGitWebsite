import React from 'react';

interface ProjectProps {
  title: string;
  body: string;
}

const Project: React.FC<ProjectProps> = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Project;
