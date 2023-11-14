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
import { topFourArray } from '../../assets/data/topFour';
import { techData } from '../../assets/data/techData';
import HorizontalDivider from './DividerHorizontal';
import VerticalDivider from './DividerVertical';

const AltHomePage = () => {
  return (
    <Container style={{backgroundColor: 'grey'}}>
        <Container >
              <MyNav />
              <HeaderCard />
        </Container>
            <Container style={{marginTop: '40rem'}} > 
            
            <SpanBar/>

            <CardSwitcher data={topFourArray}/>
            <HorizontalDivider/>
            <CardRight/>
            <HorizontalDivider/>
            <TechGrid data={techData}/>
          </Container>
    
    </Container>
  );
};

export default AltHomePage;