import React from 'react';
import CustomNavbar from '../CustomNavbar';
import Header from '../Header';
import MainContentCard from '../MainContentCard';
import testcard from '../../assets/data/testcard.js';
import Grid from '../Grid';
import techData from '../../assets/data/techData.js';
import DividerHorizontal from '../VisualEffectsComponents/DividerHorizontal';
import { Modal } from 'react-bootstrap';
import MyModal from '../MyModal';
import ContactSection from '../ContactComponents/ContactSection';
import EmailForm from '../EmailComponents/EmailForm';

const LandingPage = () => {
  return (
<>
<div style={{backgroundColor:'grey', color: 'white'}}>
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


 <ContactSection />

</div>
</>
  );
};

export default LandingPage;
