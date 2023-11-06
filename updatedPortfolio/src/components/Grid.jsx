import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FadeInSection from './FadeIn';
import { to } from '@react-spring/web';

const Grid = (props) => {
  const [isExpanded, setIsExpanded] = useState(false); // State variable for expand/collapse
  const [isSmallWindow, setIsSmallWindow] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Toggle the state variable
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setIsSmallWindow(window.innerWidth < 850); // Set the condition for small window size
        // Set isExpanded based on window size
    };


    window.addEventListener('resize', handleWindowResize);
    return () => {
     
      console.log(isExpanded, isSmallWindow)
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  const resizeGrid = () => {window.innerWidth < 850 ? setIsExpanded(false) : setIsExpanded(true);}
  
window.addEventListener('resize', resizeGrid);

  const data = props.data;
  const numItemsToShow = isExpanded ? data.length : 4;

  const cardItems = data.slice(0, numItemsToShow).map((item, index) => (
    <Col key={index} xs={6} md={4} lg={3}>
      <FadeInSection>
        <Card style={{ margin: '2rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>{item.label}</Card.Title>
          </Card.Body>
        </Card>
      </FadeInSection>
    </Col>
  ));

  return (
    <div >
      <Container style={{ justifyContent: 'center', animation: 'smooth' }} >
        <Row>
          {cardItems}
        </Row>
      </Container>
      <Button onClick={toggleExpand}>Toggle Expand</Button>
    </div>
  );
};

export default Grid;
