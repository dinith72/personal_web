
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import imgPotrait from "../assets/dinith.png";

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
      <Col lg="5" md="5" className="animeTxt">
        <Row className="text-row">
          <p> Hola , </p>
          <p> I am Dinith Jayabodhi</p>
          <p> I am </p>
        </Row>
        <Row className="text-row">
          <p className="jobs"> {TEXTS[index % TEXTS.length]} </p>
        </Row>
        <Row className="text-row">
         <Button id="resume" variant="outline-success" size="lg">Download Resume</Button>
        </Row>
      </Col>
      <Col lg="5" md="5" className="profPic">
        <img src={imgPotrait} alt="Logo" />
      </Col>
    </Container>
  );
}
export default HomePage;
