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
import ContactSection from './ContactSection';
import EmailForm from './EmailForm';

const LandingPage = () => {
  return (
<>
<div style={{backgroundColor:'grey', color: 'white'}}>
<Header />
<DividerHorizontal />
<MainContentCard data={testcard} direction={'right'}/>
<DividerHorizontal />
<MainContentCard data={testcard} direction={'left'}/>
<DividerHorizontal />
<Grid data={techData}/>
<DividerHorizontal />
<MainContentCard data={testcard} direction={'left'}/>
<DividerHorizontal />
<MyModal content={<EmailForm/>}/>
<EmailForm />
<ContactSection />
</div>
</>
  );
};

export default LandingPage;
