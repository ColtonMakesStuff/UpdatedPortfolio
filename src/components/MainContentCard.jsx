import React, { useState, useEffect } from 'react';
import { Card, Placeholder, Row, Col, Container } from 'react-bootstrap';
import FadeInSection from './VisualEffectsComponents/FadeIn';

const MainContentCard = ({ data, direction }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 725); // Adjust the breakpoint as needed
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check the value of isSmallScreen and direction
  console.log('isSmallScreen:', isSmallScreen);
  console.log('direction:', direction);

  // Render different components based on the conditions
  return isSmallScreen ? (
    <Row className="justify-content-center">
      <Col xs={8} style={{ maxWidth: '90vw' }}>
        <Card style={{ border: 'none', backgroundColor:'transparent', color:'white', justifyContent:'center' }}>
        <Card.Img variant="top" style={{width:'100%'}} src={data.image} />
          <Card.Body  >
            <FadeInSection>
                <Card.Title><div style={{whiteSpace: 'pre-line'}}><h1>{data.title}</h1></div></Card.Title>
                <Card.Text> <div style={{whiteSpace: 'pre-line'}}><p>{data.subTitle}</p></div></Card.Text>
                <Card.Text> <div style={{whiteSpace: 'pre-line'}}>{(data.text)}</div></Card.Text>
                {data.icons
                  ? 
                  <a href={data.iconLink} target="_blank" style={{marginRight:'12px'}}>
                      <img src={data.iconImage} target="_blank" alt="Icon" width="20" height="20"/>
                  </a>
                  :
                  null
                  }
                <Card.Link style={{color:'white'}} href={data.link}>{data.subtext}</Card.Link>
            </FadeInSection>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ) : direction === 'left' ? (
    <Container style={{ justifyContent: 'center', maxWidth: '80vw'}}>
    <Row style={{ justifyContent: 'space-around' }}>
            <Col sm={6} md={6} className="d-flex align-items-stretch" >
      <div className="d-flex flex-column justify-content-between h-100">
        <div>
        <div style={{whiteSpace: 'pre-line'}}><h1>{data.title}</h1></div>
       
        <Card.Text> <div style={{whiteSpace: 'pre-line'}}><p>{data.subTitle}</p></div></Card.Text>
        </div>
        <div>
        <FadeInSection>
        <div style={{whiteSpace: 'pre-line'}}>{(data.text)}</div>
        </FadeInSection>
            <div style={{display:'flex'}}>
              {data.icons
              ? 
              <a href={data.iconLink} target="_blank" style={{marginRight:'12px'}}>
                  <img src={data.iconImage} alt="Icon" width="20" height="20"/>
              </a>
              :
              null
              }
             <Card.Link style={{color:'white'}} target="_blank" href={data.link}>{data.subtext}</Card.Link>
            </div>
          </div>
          </div>
          
    </Col>
    <Col sm={5} md={5} style={{ display:'flex', justifyContent: 'end'}}>
      <Card className='d-flex align-items-stretch' style={{backgroundColor:'transparent', border:'none'}}><Card.Img variant="top" style={{maxWidth:`${data.myMaxWidth}`, width:'100%', borderRadius:'0'}} src={data.image} /></Card>
    </Col>
    </Row>
  </Container>
  ) : (
    <Container style={{ justifyContent: 'center', maxWidth: '80vw'}}>
<Row style={{ justifyContent: 'space-around'}} >
      <Col sm={5} md={5} style={{ display:'flex', justifyContent: 'end'}} >
      <Card className='d-flex align-items-stretch' style={{backgroundColor:'transparent', border:'none'}}><Card.Img variant="top" style={{maxWidth:`${data.myMaxWidth}`, width:'100%', borderRadius:'0'}} src={data.image} /></Card>
     
      </Col>
      <Col sm={6} md={6} className="d-flex align-items-stretch">
        <div className="d-flex flex-column justify-content-between h-100" >
          <div>
          <div style={{whiteSpace: 'pre-line'}}><h1>{data.title}</h1></div>
          <Card.Text> <div style={{whiteSpace: 'pre-line', }}><p>{data.subTitle}</p></div></Card.Text>
            
          </div>
          <div>
          <FadeInSection>
        <div style={{whiteSpace: 'pre-line'}}>{(data.text)}</div>
        </FadeInSection>
            <div style={{display:'flex'}}>
              {data.icons
              ? 
                <a href={data.iconLink} target="_blank" style={{marginRight:'12px'}}>
                    <img src={data.iconImage} alt="Icon" width="20" height="20"/>
                </a>
              :
              null
              }
             <Card.Link style={{color:'white'}} target="_blank" href={data.link}>{data.subtext}</Card.Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    </Container>
  );
};

export default MainContentCard;
