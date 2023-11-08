import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainContentCard from './MainContentCard';
import testcard from '../assets/data/testcard.js';
import DividerHorizontal from './DividerHorizontal';


function ProjectsPage() {
  return (
    <div style={{backgroundColor:'grey', color: 'white'}}>
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
    </div>
  );
}

export default ProjectsPage;
