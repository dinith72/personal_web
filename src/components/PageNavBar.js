import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  brands } from '@fortawesome/fontawesome-svg-core/import.macro'


import "./PageNavBar.scss";

export function PageNavbar(props) {

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }
  return (
    <Navbar id="navBar" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link className="link left" href="#home">
              Me
            </Nav.Link>
            <Nav.Link className="link left" href="#about">
              Who Am I?
            </Nav.Link>
            <Nav.Link className="link left" href="#timeline">
              My Journey
            </Nav.Link>
            {/* <Nav.Link className="link left" href="#link">
              Skills
            </Nav.Link> */}
            <Nav.Link className="link left" href="#link">
              Lets Chat
            </Nav.Link>
           
           </Nav>
           <Nav>
            <Nav.Link className="link right" href="https://www.linkedin.com/in/dinith-jayabodhi/">
              <FontAwesomeIcon icon={brands('linkedin')} />
            </Nav.Link>

            <Nav.Link className="link right" href="https://stackoverflow.com/users/8313114/dinith-jayabodhi">
              <FontAwesomeIcon icon={brands('stack-overflow')} />
            </Nav.Link>

            <Nav.Link className="link right" href="https://github.com/dinith95">
              <FontAwesomeIcon icon={brands('github-square')} />
            </Nav.Link>

            <Nav.Link className="link right" href="https://www.facebook.com/dinith.jayabodhi">
              <FontAwesomeIcon icon={brands('facebook-square')} />
            </Nav.Link>
         
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
