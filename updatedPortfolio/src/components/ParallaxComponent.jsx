import React from 'react';
import FadeInSection from './FadeIn';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Row, Col, Card } from 'react-bootstrap';
import classes from './ParallaxComponent.module.css';
import HeaderCard from './HeaderCard';
import MyNav from './Nav';
import SpanBar from './SpanBar';
import CardSwitcher from './CardSwitcher';
import CardRight from './CardRight';
import Spacer from './Spacer';
import TechGrid from './TechGrid';

const ParallaxComponent = () => {
  const hi = () => {console.log('hi hello')}

  return (
    <>
        <Parallax pages={4} style={{ top: '0', left: '0' }}>
      
          <ParallaxLayer offset={0} speed={0.1}>
            <div className={`${classes.animation_layer} ${classes.sky}`} id='sky'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.18}>
            <div className={`${classes.animation_layer} ${classes.mountains}`} id='mountains'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div className={`${classes.animation_layer} ${classes.hills}`} id='hills'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45}>
            <div className={`${classes.animation_layer} ${classes.trees}`} id='trees'></div>
          </ParallaxLayer>     
          <ParallaxLayer offset={0} speed={0.1}>
          <ParallaxLayer offset={0} speed={1}>
          <div className={`${classes.animation_layer}`} style={{ zIndex: 9999 }}>



</div>
          </ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={.5} >
     
              <MyNav />

              <HeaderCard />
            <main className={`${classes.animation_layer}`} style={{marginTop: '700px', backgroundColor: 'white'}}> 
            
            <SpanBar/>

            <Spacer>
            <CardSwitcher/>
            </Spacer>

           <div style={{backgroundColor: 'grey', color:'white'}}>
            <CardRight/>
            </div>
            
            <TechGrid/>

            <button onClick={hi} style={{ zIndex: 9999 }}>hi</button>
          </main>
          </ParallaxLayer>

        </Parallax> 
    </>
  );
};

export default ParallaxComponent;