import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactSection = () => {
  return (
    <Container className='justify-content-center' style={{ paddingTop:'29px' ,borderTop: '2px solid White', maxWidth:'75vw'}}>
      <Row>
        <Col>
          <h1>Get in touch</h1>
          {/* Content for the first row */}
          <h2>coltonmakesstuff@gmail.com</h2>
          {/* Content for the first row */}
        </Col>
      </Row>
   
      <Row className='justify-content-between text-align-center ' style={{textAlign: 'center', marginTop:'20px', borderTop:'2px solid white'}}>
        <Col style={{paddingTop:'20px', paddingBottom:'20px'}}>
          <h1>Linkedin</h1>
          {/* Content for the third row, first column */}
        </Col >
        <Col  style={{paddingTop:'20px', paddingBottom:'20px', borderLeft:'2px solid white'}} >
          <h1>GitHub</h1>
          {/* Content for the third row, second column */}
        </Col>
        <Col style={{paddingTop:'20px', paddingBottom:'20px', borderLeft:'2px solid white'}}>
          <h1>Indeed</h1>
          {/* Content for the third row, third column */}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
