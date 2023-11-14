
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
import bioData from '../../assets/data/bioData';

const AboutMePage = () => {
        return (
            <>
         
            <div style={{backgroundColor:'grey', color: 'white'}}>
         
             <Header />
                <DividerHorizontal />
                <MainContentCard data={bioData} direction={'left'}/>
            
            <ContactSection />
            </div>
            </>
    )
    }

export default AboutMePage