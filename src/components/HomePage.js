import React from "react";
import { Col, Container } from "react-bootstrap";
import imgPotrait from '../assets/me.png'

import "./HomePage.scss";

export function HomePage(props) {
  const TEXTS = [
    "Frontend Engineer",
    "Backend Engineer",
    "Cloud Engineer",
    "Blockchain  Enthusiast",
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 4000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Container id="homePg">
      
        <Col lg="5" md='5' className="animeTxt">
          <p> Hola , </p>
          <p> I am Dinith Jayabodhi</p>

          <p className="jobs"> {TEXTS[index % TEXTS.length]} </p>
        </Col>
        <Col lg="5"  md='5' className="profPic">
        <img src={imgPotrait} alt="Logo" />
        </Col>
     
    </Container>
  );
}
export default HomePage;
