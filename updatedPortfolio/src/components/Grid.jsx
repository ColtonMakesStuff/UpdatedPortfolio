import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FadeInSection from './VisualEffectsComponents/FadeIn';
import { to } from '@react-spring/web';
import { ArrowDown } from "@phosphor-icons/react";
import { ArrowUp } from "@phosphor-icons/react";
import HoverElement from './VisualEffectsComponents/HoverElement';
import classes from './Grid.module.css'

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
  const numItemsToShow = isExpanded ? data.length : 6;

  const cardItems = data.slice(0, numItemsToShow).map((item, index) => (
    <Col key={index} xs={4} md={3} lg={2}>
      <FadeInSection>
        <Card style={{  margin: '1rem', width:'100px', backgroundColor:'transparent', border: 'none'}}>
          <HoverElement description={item.description} content={ 
                      <>
                      <div style={{position:'relative', width:'100px', height:'100px', margin:'none', borderRadius:'15px'}}>
                        <Card.Img  className={`${classes.card_img}`}  variant="top" src={item.image} />
                        <Card.Img  className={`${classes.card_overlay_img}`}  variant="top" src={item.altImage} />
                        </div>
                            <p style={{textAlign:'center', height:'20px', color:'white'}}> 
                               {item.label} 
                            </p>
                      </>
              } />
        </Card>
      </FadeInSection>
    </Col>
  ));

  return (
    <Container style={{maxWidth:'80vw', justifyContent:'center', transition:'height 0.7s ease'}}>
    <Col  >
    
        <Row >
          {cardItems}
        </Row>
    {
    isExpanded ?  
    <Row sm={4} className='d-flex justify-content-center '>
      <div className={classes.my_button} onClick={toggleExpand}>
        <ArrowUp size={32} />
      </div>
     </Row>
     :
    <Row sm={4} className='d-flex justify-content-center '>
      <div className={classes.my_button} onClick={toggleExpand}>
        <ArrowDown size={32} />
        </div>
    </Row>
    }
    </Col>
    </Container>
  );
};

export default Grid;
