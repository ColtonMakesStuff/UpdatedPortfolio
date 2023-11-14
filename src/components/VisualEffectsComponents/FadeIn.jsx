import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import VisibilitySensor from 'react-visibility-sensor';

const FadeInSection = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const fadeAnimation = useSpring({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      config: { delay: 1500 }, // 1/4 second delay
    });
  
    return (
      <VisibilitySensor partialVisibility onChange={(isVisible) => setIsVisible(isVisible)}>
        <animated.div style={fadeAnimation}>
          {props.children}
        </animated.div>
      </VisibilitySensor>
    );
  };
  
  export default FadeInSection;