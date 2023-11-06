import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

const CustomNavbar = () => {
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
              <Nav.Link href="#">Contact</Nav.Link>
              <Nav.Link href="#">Projects</Nav.Link>
              <Nav.Link href="#">About Me</Nav.Link>
            </Nav>
            <Button variant="outline-light" href="/path/to/resume.pdf" download>
              Download Resume
            </Button>
          </Navbar.Collapse>
       
      </Navbar>
    </>
  );
};

export default CustomNavbar;
