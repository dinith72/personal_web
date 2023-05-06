import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import MyProjects from './MyProjects';
import Bio from "./Bio";
import SoCard from "./socard";
import "./About.scss";
import GhCard from "./ghCard";
import Lccard from "./lccard";

export function About(props) {
  return (
    <Container id="about">
      <Row>
        <Col lg="6" md="6" className="bio">
          <Bio></Bio>
        </Col>
        <Col lg="6" md="6" className="cards">
          <Row>
            <Col lg="6">
              <SoCard />
            </Col>
            <Col lg="6">
              <GhCard />
            </Col>
          </Row>
          <Row>
          <Col id="leetcode" className="cards" lg="6">
              <Lccard />
            </Col>
          </Row>
          
        </Col>
      </Row>
    </Container>
  );
}
export default About;
