import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import MyModal from './MyModal';
import DocPreview from './SkillSetComponents/DocPreview';
import HorizontalDivider from './VisualEffectsComponents/DividerHorizontal';
const CustomNavbar = () => {

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
       
          <Row className="d-flex justify-content-between">
            <Col><Link to="/" className="nav-link">
              <Navbar.Brand >
                <img src={logo} alt="Logo" style={{ maxWidth: '30px', maxHeight: '30px', margin:'5px' }} />
                ColtonMakesStuff
              </Navbar.Brand>
              </Link>
            </Col>
            <Col className="text-end">
              <Navbar.Toggle aria-controls="navbar-nav" />
            </Col>
          </Row>
          <Navbar.Collapse id="navbar-nav" style={{marginLeft:'4rem'}}>
            <Nav className="me-auto">
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/skillset" className="nav-link">Skill Set</Link>
            <Link to="/about" className="nav-link">About Me</Link>
            </Nav>
            <Button variant="outline-light" size="lg" href="/path/to/resume.pdf" download>
                            Download Resume
            </Button>
                
            
          </Navbar.Collapse>
       
      </Navbar>
    </>
  );
};

export default CustomNavbar;
