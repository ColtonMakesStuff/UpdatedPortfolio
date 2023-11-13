
import CustomNavbar from '../CustomNavbar';
import Header from '../Header';
import MainContentCard from '../MainContentCard';
import projectCards from '../../assets/data/projectCards.js';
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
<MainContentCard data={projectCards[0]} direction={'right'}/>
<DividerHorizontal />
<MainContentCard data={projectCards[1]} direction={'left'}/>
<DividerHorizontal />
<Grid data={techData}/>
<DividerHorizontal />
{/* <MainContentCard data={null} direction={'left'}/> */}


 <ContactSection />

</div>
</>
  );
};

export default LandingPage;
