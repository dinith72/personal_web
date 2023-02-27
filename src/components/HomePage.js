
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import imgPotrait from "../assets/dinith.webp";
import Typewriter from "typewriter-effect";
import resume from "../assets/cv.pdf";

import "./HomePage.scss";

export function HomePage(props) {
  const TEXTS = [
    
    "Fullstack Developer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Blockchain  Enthusiast",
  ];
  // const [index, setIndex] = React.useState(0);

  // React.useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIndex((index) => index + 1);
  //   }, 4000);
  //   return () => clearTimeout(intervalId);
  // }, []);

  return (
    <Container id="homePg">
      <Col lg="5" md="5" className="animeTxt">
        <Row className="text-row">
          <p className="info"> Hola , </p>
          <p className="info"> I am </p> 
          <p  id="name"> Dinith Jayabodhi</p>
          <p className="info"> I am </p>
        </Row>
        <Row className="text-row jobs">
         
          <Typewriter options={{
            strings: TEXTS,
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }} />
        </Row>
        <Row className="text-row">
         
          <a href={resume} download="Dinith_Jayabodhi_CV.pdf">
            <Button id="resume" variant="outline-success" size="lg">
              Download Resume
            </Button>
            </a>
          
        </Row>
      </Col>
      <Col lg="5" md="5" className="profPic">
        <img src={imgPotrait} alt="Logo" />
      </Col>
    </Container>
  );
}
export default HomePage;
