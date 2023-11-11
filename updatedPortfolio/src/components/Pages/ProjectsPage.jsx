import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainContentCard from '../MainContentCard';
import testcard from '../../assets/data/testcard.js';
import DividerHorizontal from '../VisualEffectsComponents/DividerHorizontal';
import CustomNavbar from '../CustomNavbar';
import ContactSection from '../ContactComponents/ContactSection';

function ProjectsPage() {
  return (
    <div style={{backgroundColor:'grey', color: 'white'}}>
    <CustomNavbar />
     <Row style={{ justifyContent: 'center' }}>
    <h1 style={{textAlign:'center'}}>Projects</h1>
    <MainContentCard data={testcard} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={testcard} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={testcard} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={testcard} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={testcard} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={testcard} direction={'left'}/>
    <DividerHorizontal />
    <MainContentCard data={testcard} direction={'left'}/>
    </Row>
    <ContactSection />
    </div>
  );
}

export default ProjectsPage;
