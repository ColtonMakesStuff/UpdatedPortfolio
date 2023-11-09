import React from 'react';
import DividerHorizontal from './DividerHorizontal';
import ContactSection from './ContactSection';
import EmailForm from './EmailForm';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const LandingPage = () => {
  return (
<>
<Row style={{backgroundColor:'grey', color: 'white', justifyContent: 'center'}}>
<Row style={{ justifyContent: 'center' }}>
          <Col className='text-center' style={{marginTop: '30px'}}>
            <h1>Get in touch</h1>
          </Col>
        </Row>
        <Row>
            
        </Row>
<DividerHorizontal />
<EmailForm />
<Container className='justify-content-center' style={{ paddingTop:'29px' , maxWidth:'75vw'}}>
  
   
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
</Row>
</>
  );
};

export default LandingPage;
