// resume component that will be inside of the resume modal
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import resumeData from '../assets/data/resumeData.js';
 const Resume = () => {


    return (
        <Container>
        <Row>
            <Col>
            <p>{resumeData}</p>
            </Col>
        </Row>
        </Container>
    );
}

export default Resume;