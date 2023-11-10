import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './ContactSection.module.css';
const ContactSectionLinks = () => {
  return (

      <Row className='justify-content-between text-align-center ' style={{textAlign: 'center'}}>
        <Col className={`${classes.hover} ${classes.linked_in_bar}`} style={{paddingTop:'20px', paddingBottom:'20px'}}>
          <h1>Linkedin</h1>
          {/* Content for the third row, first column */}
        </Col >
        <Col className={`${classes.hover} ${classes.github_bar}`} style={{paddingTop:'20px', paddingBottom:'20px'}} >
          <h1>GitHub</h1>
          {/* Content for the third row, second column */}
        </Col>
        <Col className={`${classes.hover} ${classes.indeed_bar}`} style={{paddingTop:'20px', paddingBottom:'20px'}}>
          <h1>Indeed</h1>
          {/* Content for the third row, third column */}
        </Col>
      </Row>
  );
};

export default ContactSectionLinks;
