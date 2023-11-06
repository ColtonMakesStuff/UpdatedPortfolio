import React from 'react';
import CustomNavbar from './CustomNavbar';
import Header from './Header';
import MainContentCard from './MainContentCard';
import testcard from '../assets/data/testcard.js';
import Grid from './Grid';
import techData from '../assets/data/techData.js';
import DividerHorizontal from './DividerHorizontal';
import { Modal } from 'react-bootstrap';
import MyModal from './MyModal';

const LandingPage = () => {
  return (
<>
<div style={{backgroundColor:'grey'}}>
<CustomNavbar />
<Header />
<DividerHorizontal />
<MainContentCard data={testcard} direction={'right'}/>
<DividerHorizontal />
<MainContentCard data={testcard} direction={'left'}/>
<DividerHorizontal />
<Grid data={techData}/>
<DividerHorizontal />
<MainContentCard data={testcard} direction={'left'}/>
<MyModal />
</div>
</>
  );
};

export default LandingPage;
