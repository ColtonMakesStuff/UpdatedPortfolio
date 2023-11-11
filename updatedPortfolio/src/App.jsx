import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import ContactPage from './components/Pages/ContactPage';
import ProjectsPage from './components/Pages/ProjectsPage';
import SkillSetPage from './components/Pages/SkillSetPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="/contact" element={<ContactPage/>} />
      <Route exact path="/projects" element={<ProjectsPage/>} />
      <Route exact path="/skillset" element={<SkillSetPage/>} />
      <Route render={() => <h1>404: Page not found</h1>} />
    </Routes>
  );
}

export default App;