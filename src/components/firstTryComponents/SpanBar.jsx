import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FadeInSection from '../FadeIn';
import classes from './SpanBar.module.css';

function SpanBar() {
  return (
    <div  fluid style={{color: 'white', backgroundColor: '#15141a'}}>
      <Row>
        <FadeInSection>
            <Col className={`d-flex justify-content-end m-5`}>
                
                <Col sm={{ span: 4, offset: 8 }} md={{ span: 4, offset: 8 }} >
                    Welcome to my portfolio page! I am so excited to share my work with you. This page is a work in progress, but I hope it gives you a sense of my skills and experience. I'm always adding new projects to my portfolio. So please check back often, and don't mind the dust! 
                </Col>
                            
            </Col> 
        </FadeInSection>
      </Row>
    </div>
  );
}

export default SpanBar;