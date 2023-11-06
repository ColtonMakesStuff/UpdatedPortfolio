import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
const CardSwitcher = (props) => {


  const [data, setData] = useState(props.data);
  
  const swapElements = (arr, index1, index2) => {
    const newArr = [...arr];
    let temp = newArr[index1];
    newArr[index1] = newArr[index2];
    newArr[index2] = temp;
    return newArr;
  };
  
  return (
    <Container style={{ maxWidth: '75vw' }}>
      <Card md={6}>
      <Row> 
        <Col>
         
            <Card.Body md={5}>
              {data[0].title}
              {data[0].text}
            </Card.Body>
          
        </Col>
        <Col md={7}>
        
        <Card.Img  src={data[0].image} />
        
        </Col>

      </Row>
      <Row>
        {data.slice(1).map((item, index) => (
          <Col md={4} xs={4} key={index} style={{transition: 'trasnsform 0.3s ease', }}>
            <Card onClick={() => setData((prevData) => swapElements(prevData, 0, index + 1))} >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Text>{item.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Card>
    </Container>
  );
  
};

export default CardSwitcher;
