
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import docImageTest from '../../assets/images/resume-stand-in.png';
import MyModal from '../MyModal';
import HandMadeModal from '../HandMadeModal';

import classes from './DocPreview.module.css';

const DocPreview = ({  }) => {

const docData = {
    title: "Resume",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content: "<p>Content</p>",
    pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    docImage: docImageTest
}

    return (
            <Container style={{maxWidth:'80vw'}}>
              <Row className='justify-content-center'>
                <Col md={6} className='d-flex justify-content-center' style={{backgroundColor:''}}>
                  <Image src={docData.docImage} style={{maxWidth:'300px'}} fluid />
                </Col>
            
                <Col md={5} className='justify-content-center'>
                  <h3>{docData.title}</h3>
                    <p>{docData.description}</p>
                  <Button variant="primary" download>Download Resume</Button>
                  <MyModal modalStyles={{ backgroundColor:'' }} modalSize={'xl'} content={<Image src={docData.docImage} fluid />} modalHandeler={<Button variant="outline-primary" >Preview Resume</Button>} />
               
                </Col>
              </Row>
              <HandMadeModal/>
            </Container>
    );
}

export default DocPreview;