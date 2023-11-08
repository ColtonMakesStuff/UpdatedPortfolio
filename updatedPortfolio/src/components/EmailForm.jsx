import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { PaperPlaneTilt } from "@phosphor-icons/react";

function EmailForm() {
  const handleEmailClick = () => {
    const email = 'coltonmakesstuff@gmail.com';
    const subjectInput = encodeURIComponent(`${subject}`);
    const body = encodeURIComponent(`${message}`);
    const contactInformation = encodeURIComponent(`${contactInfo}`);
    const ccInput = encodeURIComponent(`${cc}`);
    // Construct the email link with the subject and body input data
    const mailtoLink = `mailto:${email}?subject=${subjectInput}&body=${body}%0D%0A%0D%0A${contactInformation}&cc=${ccInput}`;

    window.location.href = mailtoLink;
  };
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [cc, setCc] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleEmailClick()
  

    // Reset the form fields
    setSubject('');
    setMessage('');
    setContactInfo('');
    setCc('');
  };

  return (
  <Row className='justify-content-center'> 
    <Form onSubmit={handleFormSubmit} style={{width:'70vw'}}>
      <Form.Group controlId="formSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter subject..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </Form.Group>
      
      <Form.Group controlId="formCc">
        <Form.Label>CC (optional)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add recipients here..."
          value={cc}
          onChange={(e) => setCc(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={8}
          placeholder="Spill the beans here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formContactInfo">
        <Form.Label>Contact Information</Form.Label>
        <Form.Control
         
         as="textarea"
          rows={3}
          placeholder="Enter contact information..."
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
      </Form.Group>
      <Row>
        <Col sm={9}><h5 style={{marginTop:'15px', marginBottom:'15px'}}>Open Pre-written Email in Your Default Mail App</h5></Col>
      <Col className='d-flex align-items-stretch'>
      <Button style={{backgroundColor:'transparent', border:'none'}} variant="primary" type="submit">
          <PaperPlaneTilt size={32} />
      </Button>
      </Col>
      </Row>
    </Form>
    </Row> 
  );
}

export default EmailForm;
