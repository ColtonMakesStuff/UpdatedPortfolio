
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
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import classes from './LandingPage.module.css';

const LandingPage = () => {
  return (
<>
<div style={{backgroundColor:'grey', color: 'white'}}>
<Header />
<DividerHorizontal />
<div style={{backgroundColor: 'rgb(50, 50, 50)', paddingBottom:'40px', marginBottom:'80px', marginTop:'150px', paddingTop:'30px'}}>
<Row className='text-align-center, justify-content-center' style={{marginBottom:'20px'}}>
  
  <Col sm={6} md={6}><h1 style={{textAlign:'center'}}>My Favorite Projects</h1>
<div style={{display:' flex',justifyContent:'center'}}>
  <Link className={`${classes.seeAll}`} style={{textDecoration:'none',color :'white', border:'2px solid white', paddingLeft: "12px",  paddingRight: "12px", borderRadius: '20px'}}to="/projects" >See All</Link>
  </div>
  </Col>
 
</Row>

<DividerHorizontal />
<MainContentCard data={projectCards[0]} direction={'right'}/>
<DividerHorizontal />
<MainContentCard data={projectCards[1]} direction={'left'}/></div>
<Row style={{justifyContent:'center'}}>
<Col sm={6} md={6}><h1 style={{textAlign:'center', marginBottom:'20px'}}>What I know</h1>
<div style={{display:' flex',justifyContent:'center'}}>

  </div>
  </Col>
</Row>
<Grid data={techData}/>
<div style={{backgroundColor: 'rgb(50, 50, 50)', paddingBottom:'40px', marginBottom:'80px', marginTop:'150px', paddingTop:'30px'}}>
<MainContentCard data={bioData} direction={'left'}/>
</div>

 <ContactSection />

</div>
</>
  );
};

export default LandingPage;
