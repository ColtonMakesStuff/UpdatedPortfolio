import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import macbookImg from '../assets/images/macbook-img.png';


const HeaderCard = () => {
  return (
    <div className="row d-flex justify-content-center " style={{ marginTop: '3rem',  }}>
      <Container>
        <Row className="justify-content-center">
          <Col  className="mt-5 col-lg-6 col-md-8 col-sm-9" style={{ maxWidth: '750px', maxHeight: '4rem' }}>
            <Card className=" text-center card" style={{ backgroundColor: 'transparent', border: 'none'}}>
              <Card.Title style={{ fontWeight: 'bold', textShadow: '0 0 5px white', fontSize: '50px' }}>
                ColtonMakesStuff
              </Card.Title>
            </Card>
            <Card className=" card" style={{ backgroundColor: 'transparent' , border: 'none'}}>
              <Card.Img src={macbookImg} alt="Image description"  />
            </Card>
            <div className="text-center" style={{ color: 'white', textShadow: '0 0 5px black' }}>
              <p>
                Body text goes here. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quis necessitatibus architecto blanditiis
                ipsum, illum, aut modi ex, a culpa commodi quidem. Qui,
                totam. Blanditiis, officia. Dolor odit animi blanditiis sunt
                error ipsam.
              </p>
              <a href="#">Link</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderCard;