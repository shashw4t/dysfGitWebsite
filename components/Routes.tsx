import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import WorkExperience from './WorkExperience';
import Contact from './Contact';
import Projects from './Projects'; // Import the consolidated Projects component

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} /> {/* Updated to use the new Projects component */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
