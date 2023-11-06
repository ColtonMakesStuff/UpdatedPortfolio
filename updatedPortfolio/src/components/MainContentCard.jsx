import React, { useState, useEffect } from 'react';
import { Card, Placeholder, Row, Col } from 'react-bootstrap';

const MainContentCard = ({ data, direction }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 725); // Adjust the breakpoint as needed
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check the value of isSmallScreen and direction
  console.log('isSmallScreen:', isSmallScreen);
  console.log('direction:', direction);

  // Render different components based on the conditions
  return isSmallScreen ? (
    <Row className="justify-content-center">
      <Col xs={8} style={{ maxWidth: '90vw' }}>
        <Card style={{ border: 'none' }}>
          <Card.Img variant="top" src={data.image} />
          <Card.Body >
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.text}</Card.Text>
            <Card.Link href={data.link}>Learn More</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ) : direction === 'left' ? (
    <Row style={{ justifyContent: 'space-around' }}>
            <Col sm={4} md={4} className="d-flex align-items-stretch" style={{margin:'12px'}}>
      <div className="d-flex flex-column justify-content-between h-100">
        <div>
          <h1>{data.title}</h1>
          
        </div>
        <div>
          <p>{data.text}</p>
          <p href={data.link}>Learn More</p>
        </div>
      </div>
    </Col>
    <Col sm={4} md={4}>
      <Card.Img variant="top" src={data.image} />
    </Col>

  </Row>
  ) : (
<Row style={{ justifyContent: 'space-around' }}>
      <Col sm={4} md={4}>
        <Card.Img variant="top" src={data.image} />
      </Col>
      <Col sm={4} md={4} className="d-flex align-items-stretch" style={{margin:'12px'}}>
        <div className="d-flex flex-column justify-content-between h-100" >
          <div>
            <h1>{data.title}</h1>
            
          </div>
          <div>
            <p>{data.text}</p>
            <p href={data.link}>Learn More</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MainContentCard;
