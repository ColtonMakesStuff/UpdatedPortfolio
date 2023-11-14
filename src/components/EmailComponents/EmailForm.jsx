import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { PaperPlaneTilt, Square, CheckSquare  } from "@phosphor-icons/react";
import classes from './EmailForm.module.css';

function EmailForm() {
  const handleEmailClick = () => {
    const email = 'coltonmakesstuff@gmail.com';
    const subjectInput = encodeURIComponent(`${subject}`);
    const body = encodeURIComponent(`${message}`);
    const contactInformation = encodeURIComponent(`${contactInfo}`);
    const ccInput = encodeURIComponent(`${cc}`);
     // Construct the email link with the subject and body input data
     let mailtoLink = '';

     // Set the email client protocol to open Gmail
     emailClient.clientName === 'gmail' ?
       mailtoLink = `https://mail.google.com/mail/?view=cm&to=${email}&cc=${ccInput}&subject=${subjectInput}&body=${body}%0D%0A${contactInformation}` :
       mailtoLink = `mailto:${email}?subject=${subjectInput}&body=${body}%0D%0A${contactInformation}&cc=${ccInput}`;
     
      const test = "https://mail.google.com/mail/?view=cm&to=email@example.com&cc=cc@example.com&bcc=bcc@example.com&subject=test%20Line&body=Body%20Text"


  // Open the mailto link in a new tab or window
   window.open(mailtoLink);
  console.log(mailtoLink)
  };
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [cc, setCc] = useState('');
  const [emailClient, setEmailClient] = useState({ client: '', clientName: '' });



  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleEmailClick()
  

    // Reset the form fields
    setSubject('');
    setMessage('');
    setContactInfo('');
    setCc('');
  };

const handleGoogleClient = () => {
  setEmailClient({ client: 'https://mail.google.com/mail/?extsrc=mailto&url=', clientName: 'gmail' });
  console.log('hi im gmail')
}
const handleDefaultClient = () => {
  setEmailClient({ client: '', clientName: 'default' });
  console.log(emailClient.clientName)
}

  return (
  <Row className='justify-content-center'> 
    <Form style={{width:'70vw'}}>
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
      <Row className='d-flex justify-content-center' style={{marginTop:'20px'}}>
       
<Col className='d-flex align-items-center justify-content-left'>
      <div  onClick={handleGoogleClient} >
              <p className= {classes.hover_cursor_pointer}>  Use Gmail{" "}
        {emailClient.clientName === 'gmail' ? (
          <CheckSquare size={40} className={classes.check_box_button} />
        ) : (
          <Square size={40} className={classes.check_box_button} color="white" />
        )}</p> 
      </div>
</Col>
      
<Col className='d-flex align-items-center justify-content-end'>
          <div  onClick={handleDefaultClient}>
                <p className= {classes.hover_cursor_pointer} >Default Mail App{" "}
            {emailClient.clientName ==='gmail' ? (
              <Square size={40} className={classes.check_box_button} />
            ) : (
              <CheckSquare size={40} className={classes.check_box_button} color="white" />
            )}</p> 
          </div>
</Col>
      </Row>
      <Row>
   
      <Row   className='justify-content-center'>   
          <Col className={classes.email_button} style={{maxWidth:'300px', display:'flex', justifyContent:'space-between'}} onClick={handleFormSubmit}><h5> Open with {emailClient.clientName ==='gmail' ? 'google mail' : 'default Mail App'}</h5> <PaperPlaneTilt size={25} color='white' /></Col>
      </Row>
     
        <Col ></Col>
      
      </Row>
    </Form>
    </Row> 
  );
}

export default EmailForm;
