import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import ContactPage from './components/Pages/ContactPage';
import ProjectsPage from './components/Pages/ProjectsPage';
import SkillSetPage from './components/Pages/SkillSetPage';
import CustomNavbar from './components/CustomNavbar';
import AboutMePAge from './components/Pages/AboutMePage';


function App() {
  return (
  <>
    <div style={{backgroundColor:'grey', color: 'white'}}>
      <CustomNavbar /> 
        <Routes>
            
              <Route exact path="/" element={<LandingPage/>} />
              <Route exact path="/contact" element={<ContactPage/>} />
              <Route exact path="/projects" element={<ProjectsPage/>} />
              <Route exact path="/skillset" element={<SkillSetPage/>} />
              <Route exact path="/about" element={<AboutMePAge/>} />
              <Route render={() => <h1>404: Page not found</h1>} />
          </Routes>
      </div>
    </>
  );
}

export default App;