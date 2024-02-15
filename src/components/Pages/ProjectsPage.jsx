import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainContentCard from '../MainContentCard';
import projectCards from '../../assets/data/projectCards.js';
import DividerHorizontal from '../VisualEffectsComponents/DividerHorizontal';
import CustomNavbar from '../CustomNavbar';
import ContactSection from '../ContactComponents/ContactSection';

function ProjectsPage() {
  return (
    <div style={{backgroundColor:'grey', color: 'white'}}>
     <Row style={{ justifyContent: 'center' }}>
    <h1 style={{textAlign:'center'}}>Projects</h1>
    <DividerHorizontal />

    <MainContentCard data={projectCards[0]} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={projectCards[1]} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={projectCards[6]} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={projectCards[2]} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={projectCards[3]} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={projectCards[4]} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={projectCards[5]} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={projectCards[7]} direction={'left'}/>
    </Row>
    <ContactSection />
    </div>
  );
}

export default ProjectsPage;
