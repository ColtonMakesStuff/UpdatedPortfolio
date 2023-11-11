import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FadeInSection from './VisualEffectsComponents/FadeIn';
import { to } from '@react-spring/web';
import { ArrowDown } from "@phosphor-icons/react";
import { ArrowUp } from "@phosphor-icons/react";

import classes from './Grid.module.css'

const BigGrid = (props) => {
  const [isSmallWindow, setIsSmallWindow] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsSmallWindow(window.innerWidth < 850); // Set the condition for small window size
        // Set isExpanded based on window size
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
     
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  const data = props.data;

  const numItemsToShow = data.length;

  const cardItems = data.slice(0, numItemsToShow).map((item, index) => (
    <Col key={index} xs={4} md={3} lg={2}>
      <FadeInSection>
        <Card style={{  margin: '1rem', width:'100px', backgroundColor:'transparent', border: 'none'}}>
          <Card.Img variant="top" src={item.image} style={{width:'100px', height:'100px', margin:'none'}}/>
            <p style={{textAlign:'center', height:'20px'}} >{item.label}</p>
        </Card>
      </FadeInSection>
    </Col>
  ));

  return (
    <Container style={{maxWidth:'80vw', justifyContent:'center', transition:'height 0.7s ease'}}>
    <Col  >
    
        <Row>
          {cardItems}
        </Row>

    </Col>
    </Container>
  );
};

export default BigGrid;
