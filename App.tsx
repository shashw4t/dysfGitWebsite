import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Project from './components/Project';
import Navbar from './components/Navbar';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/aboutme"
            element={
              <AboutMe
                text="Welcome to my portfolio! I’m a Data Scientist with a strong foundation in software engineering. I’m passionate about leveraging data to drive insights and solve complex problems."
              />
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/workexperience" element={<WorkExperience />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/project"
            element={<Project title="My Project" body="This is a description of the project." />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
