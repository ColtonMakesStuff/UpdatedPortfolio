// TODO make a component whose children elements have a margin of 10vh
import { Container } from 'react-bootstrap';
import React from 'react';

const Spacer = (props) => {
    return (
        <Container style={{ maxWidth: '75vw' , marginTop: '20vh'}}> 
          {props.children}
        </Container>
    );
}

export default Spacer;