import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import placeholderPunkin from '../assets/images/placeholder-punkin.png';

const TechGrid = () => {


  
  const data = [
    { image: placeholderPunkin, label: 'Label 1' },
    { image: placeholderPunkin, label: 'Label 2' },
    { image: placeholderPunkin, label: 'Label 3' },
    { image: placeholderPunkin, label: 'Label 4' },
    { image: placeholderPunkin, label: 'Label 5' },
    { image: placeholderPunkin, label: 'Label 6' },
    { image: placeholderPunkin, label: 'Label 7' },
    { image: placeholderPunkin, label: 'Label 8' },
    // Add more data objects as needed
  ];

  const cardItems = data.map((item, index) => (
    <Col key={index} xs={6} md={4} lg={3} >
      <Card style={{margin: '2rem'}}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title style={{textAlign: 'center'}}>{item.label}</Card.Title>
          {/* Add more card content as needed */}
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <Row>
        {cardItems}
      </Row>
    </Container>
  );
};

export default TechGrid;
