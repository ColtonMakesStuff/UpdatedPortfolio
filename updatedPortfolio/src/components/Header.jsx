import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import placeHolderPunkin from '../assets/images/placeholder-punkin.png';

const Header = () => {
  return (
    <Row style={{ justifyContent: 'center' }}>
    <Col md={8} sm={10}  lg={8}>
      <Card bg="transparent" border="none">
        <Card.Title>Title</Card.Title>
        <Card.Img src={placeHolderPunkin} alt="Image" />
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod lectus in nulla fringilla, ac ultrices
          justo sollicitudin. Sed fermentum tristique erat, quis lacinia velit sodales eu.
        </Card.Text>
      </Card>
    </Col>
    </Row>
  );
};

export default Header;
