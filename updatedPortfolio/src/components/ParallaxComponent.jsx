import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Row, Col, Card } from 'react-bootstrap';
import classes from './ParallaxComponent.module.css';
import HeaderCard from './HeaderCard';
import MyNav from './Nav';

const ParallaxComponent = () => {
  return (
    <>        
 <div style={{ width: '100%', height: '100%', background: '#253237' }}>
    <MyNav />
      <Parallax  pages={2} style={{top: '0', left: '0'}}>
        <ParallaxLayer offset={0} speed={.1}>
          <div className={`${classes.animation_layer} ${classes.sky}`} id='sky'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={.18}>
          <div className={`${classes.animation_layer} ${classes.mountains}`} id='mountains'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={.3}>
          <div className={`${classes.animation_layer} ${classes.hills}`} id='hills'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={.45}>
          <div className={`${classes.animation_layer} ${classes.trees}`} id='trees'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={.25}>
          <div className={`${classes.animation_layer} `} > 
          <HeaderCard />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={.25}>
    
          <div className=" row justify-content-center" style={{ maxHeight: '400px', border: 'none', backgroundColor: 'black'}}>
      <Container>
        <Row className="justify-content-end">
          <Col md={6}>
            <Card className="" style={{ fontSize: 'medium' }}>
              <Card.Body>
                <p className="pt-4 pb-3">Body text goes here. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis necessitatibus architecto blanditiis ipsum, illum, aut modi ex, a culpa commodi quidem. Qui, totam. Blanditiis, officia. Dolor odit animi blanditiis sunt error ipsam.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
         
        </ParallaxLayer>
      </Parallax> 



 
      </div>
    </>
  );
};

export default ParallaxComponent;


