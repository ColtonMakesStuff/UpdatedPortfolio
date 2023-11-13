
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import docImageTest from '../../assets/images/resume-stand-in.png';
import MyModal from '../MyModal';
import { useState } from 'react';
import classes from './DocPreview.module.css';
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import FadeInSection from '../VisualEffectsComponents/FadeIn';

const DocPreview = ({  }) => {

const docData = {
    title: "Resume",
    description: "Thank you for your interest! Download my resume here to see a detailed overview of my qualifications. For more information or references, please don't hesitate to reach out.",
    content: "<p>Content</p>",
    pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    docImage: docImageTest,


}



const [toggleOverlay, setToggleOverlay] = useState(true);
const toggleOverlayHandler = () => {
    setToggleOverlay(!toggleOverlay);

}

    return (
            <Container style={{maxWidth:'80vw'}} >
              <Row className='justify-content-around'>
             
                <Col md={5} className='d-flex justify-content-center' style={{backgroundColor:''}}>
                    <div className={`${classes.preview_doc}`} onMouseEnter={toggleOverlayHandler} onMouseLeave={toggleOverlayHandler} onClick={toggleOverlayHandler}>
                         <MyModal modalStyles={{ backgroundColor:'' }} modalSize={'xl'} content={
                         <div className='d-flex justify-content-center' >
                         <Image src={docData.docImage} fluid />
                         </div>
                        } modalHandeler={ 

                         toggleOverlay
                         ?
                         <Image src={docData.docImage} style={{maxWidth:'300px'}} fluid />
                      
                            :
                            <>
 
                            <Image src={docData.docImage} style={{maxWidth:'300px'}} fluid />
                            <div className={`${classes.overlay_container}`}>
                           <MagnifyingGlassPlus size={60} color='white' className={`${classes.overlay}`} />
                           </div>
                           </>
                         } />
                    </div>
                </Col>
            
                <Col md={5} className="d-flex align-items-stretch" style={{margin:'12px'}} >
                    <div className="d-flex flex-column justify-content-between">
                    <div> <h1>{docData.title}</h1>
                    
                    <p>{docData.description}</p></div>
                    <div> 
                    <a href="/path/to/resume.pdf" download>
                        <button className={`${classes.download_button}`} size="lg">
                            Download Resume
                        </button>
                    </a>

                
                  </div>
                    </div>
                 
                     
               
                </Col>
              </Row>
            </Container>
    );
}

export default DocPreview;