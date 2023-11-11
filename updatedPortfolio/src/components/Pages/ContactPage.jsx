import React from 'react';
import DividerHorizontal from '../VisualEffectsComponents/DividerHorizontal';
import ContactSection from '../ContactComponents/ContactSection';
import EmailForm from '../EmailComponents/EmailForm';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import CustomNavbar from '../CustomNavbar';
import logo from '../../assets/images/logo.png';
import ContactSectionLinks from '../ContactComponents/ContactSectionLinks';
const LandingPage = () => {
  return (
<>
<div style={{backgroundColor:'grey', color: 'white'}}>
<CustomNavbar />
<Row style={{ justifyContent: 'center', marginBottom:'45px'}} >
   
          <Col  sm={8} className='text-center justify-content-center' style={{marginTop: '30px'}}> 
          <img src={logo}  style={{maxHeight:'150px', maxWidth:'150px'}} alt="" />
          <h1>ColtonMakesStuff</h1>
          <DividerHorizontal />
            <h2 style={{marginTop:'30px'}}>Get in touch</h2>
            <Row ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolor ea error! Earum nihil, laborum tenetur laudantium quidem molestias cumque delectus! Repellendus neque sunt eligendi deleniti, cupiditate sed unde ducimus consequatur. Commodi consectetur, inventore vero ab enim tenetur aperiam impedit asperiores, aliquid placeat aspernatur velit iure porro unde eaque non fugit ex nisi assumenda nostrum, temporibus vitae? Reprehenderit est tempore sunt quis, laborum eos fuga voluptates?</p></Row>
          <DividerHorizontal />

          </Col>
        </Row>
        <Row>

        </Row>
<EmailForm />
<Container className='justify-content-center' style={{ paddingTop:'29px' , maxWidth:'75vw'}}>
 <Row style={{borderTop:'2px solid White'}}> 
 <ContactSectionLinks/>
 </Row>
    </Container>
</div>
</>
  );
};

export default LandingPage;
