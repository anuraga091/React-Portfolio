import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// import Home2 from "./Home2";
import HomeType from "./HomeType";
import styled from 'styled-components';


const Home = () => {
  return (
    <Section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ANURAG </strong>
              </h1>

              <div style={{ padding: 40, textAlign: "left" }}>
                <HomeType />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src="./images/Startup.png"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </Section>

  )
}

const Section = styled('section')`
  .wave {
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.1s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
}

.home-header {
  padding-top: 80px !important;
}

.home-content {
  @media (max-width: 768px){
    padding: 0rem 0 2rem !important;
  }
  padding: 2rem 0 2rem !important;
  color: whitesmoke;
  text-align: left;
}

.heading {
  font-size: 2.4em !important;
  padding-left: 50px !important;
}

.heading-name {
  font-size: 2.5em !important;
  padding-left: 45px !important;
}

.main-name {
  color: #8E05C2;
}
`;

export default Home
