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


const ContactPage = () => {
  return (

<div className='w-100' style={{backgroundColor:'grey', color: 'white'}}>
<Row style={{ justifyContent: 'center', marginBottom:'45px'}} >
   
          <Col  sm={8} className='text-center justify-content-center' style={{marginTop: '30px'}}> 
          <img src={logo}  style={{maxHeight:'150px', maxWidth:'150px'}} alt="" />
          <h1>ColtonMakesStuff</h1>
          <DividerHorizontal />
            <h2 style={{marginTop:'30px'}}>Get in touch</h2>
            <Row ><p><div style={{whiteSpace: 'pre-line'}}>
{`I'm always interested in hearing about new opportunities. The best way to reach me is by email. I also check my LinkedIn regularly, so feel free to connect with me there as well.

 I typically respond to all inquiries within 48 hours.

 I look forward to connecting with you soon!
`}
            
</div>
</p></Row>
          <DividerHorizontal />

          </Col>
        </Row>
     
        <div  style={{ width:'100vw'}}>
<EmailForm />

<Container className='justify-content-center' style={{ paddingTop:'29px' , maxWidth:'75vw'}}>
 <Row style={{borderTop:'2px solid White'}}> 
 <ContactSectionLinks/>
 </Row>
    </Container>
</div>
</div>

  );
};

export default ContactPage;
