//in this file i will be making a modal by hand because the one from reactstrap is not working for everything i need it to do

import React from 'react';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const HandMadeModal = ({}) => {

    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleIsExpanded = () => {
        setIsExpanded(!isExpanded);
    }


    const content = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis quae corporis consequuntur. Corporis non asperiores, sequi doloremque quidem, vel amet repellendus odio, suscipit sunt architecto! Doloribus dignissimos eos aliquam placeat qui.</p>';

    return (
        <div>
            <Button onClick={toggleIsExpanded}/>
            {isExpanded && 
            <div>
            <div onClick={toggleIsExpanded}
            style={{ 
                width: '100vw',
                height: '100%',
                position: 'fixed',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                justifySelf:'center',
                zIndex:'999'
                }}>          
                        </div> <div
    style={{ 
        width: '80vw',
        position: 'fixed',
        marginTop:'10vh',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor:'grey', 
        color:'white', 
        border:'30px solid grey', 
        borderRadius:'6px', 
        justifySelf:'center',
        zIndex:'1000',
        aspectRatio: '11 / 16'
     }}
        > 
                             {content}
                         
                 </div> 
                 </div> 
            }
            
        </div>
    );
}

export default HandMadeModal;