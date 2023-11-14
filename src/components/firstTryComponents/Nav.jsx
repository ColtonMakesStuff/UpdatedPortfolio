import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/logo.png';

function MyNav() {
    const [isSmallWindow, setIsSmallWindow] = useState(false);

    useEffect(() => {
      const handleWindowResize = () => {
        setIsSmallWindow(window.innerWidth < 850); // Set the condition for small window size
      };
  
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    return (
      <>
{isSmallWindow ? 
<Navbar bg="dark" variant="dark"  className="justify-content-center align-items-center" style={{ width: '100vw' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <img src={logo} alt="" width="50" height="50" /> 
    <Nav className="justify-content-around">
      <Nav.Link href="#"  >Contact</Nav.Link>
      <Nav.Link href="#">About Me</Nav.Link>
      <Nav.Link href="#">Projects</Nav.Link>
    </Nav>
  </div>
</Navbar>
:
<Navbar bg="dark" variant="dark" >
    <Navbar.Brand href="#" style={{width: '300px'}}>
      <img src={logo} alt="" width="40" height="40" /> ColtonMakesStuff
    </Navbar.Brand>
    <Nav className="mx-auto">
      <Nav.Link href="#">About Me</Nav.Link>
      <Nav.Link href="#">Contact</Nav.Link>
      <Nav.Link href="#">Projects</Nav.Link>
    </Nav>
    <div  style={{width: '340px', display:'flex',justifyContent:'right'}}>
    <Button variant="outline-success" className="ml-auto">Right Button</Button>
    </div>
</Navbar>  
}  
    </>

  );
}

export default MyNav;
