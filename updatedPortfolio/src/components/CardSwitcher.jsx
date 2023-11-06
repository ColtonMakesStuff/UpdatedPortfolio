import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import placeholderPunkin from '../assets/images/placeholder-punkin.png';
const CardSwitcher = () => {



  const [data, setData] = useState([
    {
      title: 'First Object',
      text: 'Lorem ipsum dolor sit amet lorem45 Welcome to my portfolio page! I am so excited to share my work with you. This page is a work iWOOT hope it gives you a sense of my skills and experience.  always adding new projects to my portfolio. So please check back often, and donst!.',
      image: placeholderPunkin
    },
    {
      title: 'Second Object',
      text: 'Consectetur adipiscing elit Welcome to my portfolio page! I am so excited to share my work with you. This page is a work in progresWOOT WOOTs, but I hope it gives you a sense of my skills and experience. m always adding new projects to my portfolio. So please check back often, and t mind the dust!.',
      image: placeholderPunkin
    },
    {
      title: 'Third Object',
      text: 'Sed do eiusmod tempor incididunt Welcome to my portfolio page! I am so excited to share my work with you. This page is a work in progresAWOOT WOOTT WOOTs, but I hope it gives you a sense of my skills and experience. Im always adding new projects to my portfolio. So please check back often, and dont mind the dust.',
      image: placeholderPunkin
    },
    {
      title: 'Fourth Object',
      text: 'Sed do eiusmod tempor incididunt Welcome to my portfolio page! I am so excited to share my work with you. This page is a work in progress,WOOT WOOT WOOT WOOT but I hope it gives you a sense of my skills and experience.  always adding new projects to my portfolio. So please check back often, and do mind the dust!.',
      image: placeholderPunkin
    }
  ]);
  
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
