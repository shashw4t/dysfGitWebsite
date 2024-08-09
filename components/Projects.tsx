import React from 'react';

interface ProjectProps {
  title: string;
  body: string;
}

const Project: React.FC<ProjectProps> = ({ title, body }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        <div className="col-md-6">
          <Project
            title="Don’t Wreck My House (DWMH)"
            body="A comprehensive project management system designed to assist hosts in managing guest reservations efficiently. Built using Java and JUnit."
          />
        </div>
        <div className="col-md-6">
          <Project
            title="Predict Future Sales (Kaggle)"
            body="Developed predictive models using machine learning techniques to forecast future sales with high accuracy. Achieved a Mean Absolute Error (MAE) of 0.19."
          />
        </div>
        <div className="col-md-6">
          <Project
            title="Bank Database Design Project"
            body="Designed a small database system, created and populated this database using ORACLE for a Database Management Systems Design Term Project."
          />
        </div>
        <div className="col-md-6">
          <Project
            title="Wikipedia Spark Analysis"
            body="Used Spark via Python to process data, analyze trends and identified most popular language by obtaining results from 1.2 billion words from Wikipedia pages."
          />
        </div>
        <div className="col-md-6">
          <Project
            title="Generative Adversarial Network"
            body="Constructed a GAN for cartoon face generation using Torchvision to manipulate the images. Built a Wasserstein GAN to run the 10,000 images through a generator and discriminator composed of CNNs."
          />
        </div>
        <div className="col-md-6">
          <Project
            title="Another Project Title"
            body="A brief description of another project you’ve worked on, detailing the technology stack used and the key achievements."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
