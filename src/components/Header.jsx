
import { Card, Col, Row } from 'react-bootstrap';
import rocks from '../assets/images/rocks.png';
import classes from './Header.module.css';
import HorizontalDivider from './VisualEffectsComponents/DividerHorizontal';


const Header = () => {
  return (
    <Row style={{ justifyContent: 'center', }}>
    <Col   md={8} sm={10}  lg={8}>
      <Card bg="transparent" style={{border:'none', marginTop:'40px',display:'flex', alignItems:"center" }}>
        <Card.Title>
          <Row>
            <div style={{display:'flex', justifyContent:'center', marginBottom:'40px'}}>
              <h1 style={{color:'white', textAlign:'center', fontWeight:'lighter'}}>
                Hello, I'm
              </h1>
            
             
              <h1  style={{color:'white', textAlign:'center', marginLeft:'12px'}}>
                Colton Firestone
              </h1>
            </div>
            
             
          </Row>
        
          </Card.Title>
        <Card.Img  sm={5} src={rocks} alt="Image" style={{ borderTop:'2px solid white', borderBottom:'2px solid white', paddingBottom:'40px', paddingTop:'40px' ,borderRadius:'0'}}/>
      
        <Card.Text >
          <p style={{textAlign:'center', color:'white', fontSize:'large', margin:'20px'}}>
        Hard worker with years of experience in rapidly changing environments. Passionate about design, art, rock climbing, climate activism, and equal outdoor access. 
        </p>
        
        <p style={{textAlign:'center', color:'white', fontSize:'large', margin:'20px'}}>
        As an Artist first, I value form and its deep connection to function. In my free time, I design bags, climbing gear, and more, from paint palettes to training boards to backpacks. I love the challenge of creating and building, and I aspire to bring the same passion to my software work.
        </p>
        </Card.Text>
      </Card>
    </Col>
    </Row>
  );
};

export default Header;
