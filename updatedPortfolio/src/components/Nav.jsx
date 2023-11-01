import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


function MyNav() {
  return (
    <>  
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="" alt="" width="30" height="24" /> Brand Name
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#">Button 1</Nav.Link>
          <Nav.Link href="#">Button 2</Nav.Link>
          <Nav.Link href="#">Button 3</Nav.Link>
        </Nav>
        <Button variant="outline-success" className="ml-auto">Right Button</Button>
      </Container>
    </Navbar>
    </>

  );
}

export default MyNav;
