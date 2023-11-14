import React from 'react';
import FadeInSection from './FadeIn';
import placeholderPunkin from '../assets/images/placeholder-punkin.png';
import { Card, Row, Col, Container, Button, Image } from 'react-bootstrap';
import VerticalDivider from './DividerVertical';
const CardRight = () => {
    return (
        <Container >
          <Row style={{justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
            <Col xs={6} md={6} xl={4}>
              <Image src={placeholderPunkin} rounded fluid />
            </Col>
            
            <Col xs={5} md={5} className="text-start" >
                <FadeInSection>
                <Card.Title className="text-start">
                    <h1>Card Title</h1>
                </Card.Title >
                </FadeInSection>
                <FadeInSection>
              <p>Your text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nihil quaerat reiciendis cupiditate adipisci in qui alias doloribus tempora, repellendus ab dolores consequatur sint. Aspernatur architecto distinctio nobis maxime numquam non perspiciatis inventore aperiam?goes here</p>
              <Button variant="primary" style={{float:'right'}}>Go somewhere</Button>
                </FadeInSection>
            </Col>
          </Row>
        </Container>
      );
};

export default CardRight;