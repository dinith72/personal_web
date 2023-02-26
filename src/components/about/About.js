import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import MyProjects from './MyProjects';
import Bio from "./Bio";
import SoCard from "./socard";
import "./About.scss";

export function About(props) {
  return (
    <Container id="about">
      <Row>
        <Col lg="6" md="6" className="bio">
          <Bio></Bio>
        </Col>
        <Col lg="6" md="6" className="cards">
          <SoCard />
          {/* <a href="https://stackoverflow.com/users/8313114/dinith-jayabodhi">
            <img
              src="https://stackoverflow.com/users/flair/8313114.png?theme=dark"
              width="208"
              height="58"
              alt="dinith jayabodhi profile"
              title=""
            />
          </a> */}
        </Col>
      </Row>
    </Container>
  );
}
export default About;
