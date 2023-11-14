import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import classes from './HoverElement.module.css';
import { DotsThree } from '@phosphor-icons/react';

const HoverElement = ({description, content}) => {
const [hovering, setHovering] = useState(false);

const toggleHover = () => setHovering(!hovering);
      

  return (
<div className={`${classes.hover_container}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
    {content}
    {hovering ? <>
    <div className={`${classes.hover_element}`}><p style={{color:'white'}}>{description}</p><DotsThree className={`${classes.down_caret}`} size={32} color={'white'} /></div>
    
     </>: null}
</div>
  );
}

export default HoverElement;
