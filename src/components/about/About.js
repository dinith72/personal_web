import React, { Component } from 'react';
import { Col, Container,  } from "react-bootstrap";
// import MyProjects from './MyProjects';
import Bio from './Bio';

export function About(props) {
 
   
    return (
      <Container id="homePg">
        <Col lg="6" md="12" className="animeTxt">
        </Col>
        <Col lg="6" md="12" className="animeTxt">
          <Bio></Bio>
        </Col>
      </Container>
    );
  }
  export default About;