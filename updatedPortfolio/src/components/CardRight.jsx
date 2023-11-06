import React from 'react';
import FadeInSection from './FadeIn';
import placeholderPunkin from '../assets/images/placeholder-punkin.png';
import { Card, Row, Col, Container, Button, Image } from 'react-bootstrap';
const CardRight = () => {
    return (
        <div>
          <Row style={{justifyContent: 'space-between', alignItems: 'center'}}>
            <Col xs={6} md={6} xl={4}>
              <Image src={placeholderPunkin} rounded fluid />
            </Col>
            <Col xs={6} md={6} className="text-start" >
                <Card.Title className="text-start">
                    <h1>Card Title</h1>
                </Card.Title >
              <p>Your text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nihil quaerat reiciendis cupiditate adipisci in qui alias doloribus tempora, repellendus ab dolores consequatur sint. Aspernatur architecto distinctio nobis maxime numquam non perspiciatis inventore aperiam?goes here</p>
              <Button variant="primary" style={{float:'right'}}>Go somewhere</Button>
            </Col>
          </Row>
        </div>
      );
};

export default CardRight;