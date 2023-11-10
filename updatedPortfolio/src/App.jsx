import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="/contact" element={<ContactPage/>} />
      <Route exact path="/projects" element={<ProjectsPage/>} />
      <Route render={() => <h1>404: Page not found</h1>} />
    </Routes>
  );
}

export default App;