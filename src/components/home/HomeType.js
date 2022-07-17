import React from 'react';
import Typewriter from "typewriter-effect";
import styled from 'styled-components';

const HomeType = () => {
  return (
    <Div>
        <Typewriter
        options={{
            strings: [
            "Developer",
            "Startup Enthusiast",
            "MERN Stack Developer",
            "Frontend Developer",
            "Aspiring Product Manager"
           
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
        />
    </Div>
  )
}

const Div = styled('div')`
.Typewriter__wrapper {
  font-size: 2.2em !important;
  color: #be6adf !important;
  font-weight: 600 !important;
  text-align: center;
  align-items: center;
  z-index: -1;
}
.Typewriter__cursor {
  font-size: 2.4em !important;
  color: #b562d6 !important;
}

@media (max-width: 767px) {
  .Typewriter__wrapper {
    font-size: 1.4em !important;
    font-weight: 500 !important;
    position: absolute !important;
    
  }
  .Typewriter__cursor {
    display: none !important;
   
  }
}
`;

export default HomeType