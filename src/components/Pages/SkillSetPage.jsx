
import React from 'react'
import { Row } from 'react-bootstrap'
import MainContentCard from '../MainContentCard'
import projectCards from '../../assets/data/projectCards.js'
import DividerHorizontal from '../VisualEffectsComponents/DividerHorizontal'
import CustomNavbar from '../CustomNavbar'
import ContactSection from '../ContactComponents/ContactSection'
import BigGrid from '../BigGrid'
import techData from '../../assets/data/techData.js';
import DocPreview from '../SkillSetComponents/DocPreview'
import StrengthsData from '../../assets/data/strengthsData'

const SkillSetPage = () => {
        return (
            <>
         
            <div style={{backgroundColor:'grey', color: 'white'}}>
            <h1 style={{textAlign:'center', marginTop:'40px'}}>The Details</h1>
             <Row style={{ justifyContent: 'center' }}>
            <DividerHorizontal />      
            <DocPreview /> 
            <DividerHorizontal />      

            <MainContentCard data={StrengthsData} direction={'left'}/>
            <DividerHorizontal />
            <BigGrid data={techData} />
            </Row>
            <ContactSection />
            </div>
            </>
    )
    }

export default SkillSetPage