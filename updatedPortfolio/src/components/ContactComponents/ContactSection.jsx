import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyModal from '../MyModal';
import EmailForm from '../EmailComponents/EmailForm';
import classes from './ContactSection.module.css';
import ContactSectionLinks from './ContactSectionLinks';

const ContactSection = () => {
  return (
    <Container className='justify-content-center' style={{ paddingTop:'29px' , maxWidth:'75vw'}}>
        <MyModal content={<EmailForm/>} modalHandeler={
       <Row className={`${classes.hover} ${classes.email_bar}`}>
        <Col>
          <h1>Get in touch</h1>
          {/* Content for the first row */}
          <h2>coltonmakesstuff@gmail.com</h2>
          {/* Content for the first row */}
        </Col>
        </Row>
        // <p className={`${toggle}`}></p>
        }/>
   
   
      <ContactSectionLinks/>
    </Container>
  );
};

export default ContactSection;
