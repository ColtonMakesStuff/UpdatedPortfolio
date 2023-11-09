import React from 'react';
import logo from './assets/images/logo.png';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
// import ParallaxComponent from './components/firstTryComponents/ParallaxComponent';
// import AltHomePage from './components/firstTryComponents/AltHomePage';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import CustomNavbar from './components/CustomNavbar';
import ProjectsPage from './components/ProjectsPage';
// import reactRouter from 'react-router-dom';

function App() {
  return (
    <>
   <Navbar bg="dark" expand="lg" variant="dark">
       
       <Row className="d-flex justify-content-between">
         <Col>
           <Navbar.Brand href="#">
             <img src={logo} alt="Logo" style={{ maxWidth: '30px', maxHeight: '30px', margin:'5px' }} />
             ColtonMakesStuff
           </Navbar.Brand>
         </Col>
         <Col className="text-end">
           <Navbar.Toggle aria-controls="navbar-nav" />
         </Col>
       </Row>
       <Navbar.Collapse id="navbar-nav">
         <Nav className="me-auto">
           <Nav.Link href="/Contact">Contact</Nav.Link>
           <Nav.Link href="#">Projects</Nav.Link>
           <Nav.Link href="#">About Me</Nav.Link>
         </Nav>
         <Button variant="outline-light" href="/path/to/resume.pdf" download>
           Download Resume
         </Button>
       </Navbar.Collapse>
    
   </Navbar>
      
    {/* should be /home */}
      <LandingPage />
      
    {/* should be /contact */}
     {/* <ContactPage/> */}

    {/* should be /projects */}
     {/* <ProjectsPage/> */}
    </>
  );
}

export default App;
