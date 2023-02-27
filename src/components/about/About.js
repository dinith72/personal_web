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
        </Col>
      </Row>
    </Container>
  );
}
export default About;
