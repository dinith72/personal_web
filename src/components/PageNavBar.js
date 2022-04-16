import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  brands } from '@fortawesome/fontawesome-svg-core/import.macro'


import "./PageNavBar.scss";

export function PageNavbar(props) {
  return (
    <Navbar id="navBar" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="link left" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="link left" href="#link">
              About
            </Nav.Link>
            <Nav.Link className="link left" href="#link">
              Blog
            </Nav.Link>
            <Nav.Link className="link left" href="#link">
              Skills
            </Nav.Link>
            <Nav.Link className="link left" href="#link">
              Contact
            </Nav.Link>
            
            <Nav.Link className="link right" href="https://www.linkedin.com/in/dinith-jayabodhi/">
              <FontAwesomeIcon icon={brands('linkedin')} />
            </Nav.Link>

            <Nav.Link className="link right" href="https://stackoverflow.com/users/8313114/dinith-jayabodhi">
              <FontAwesomeIcon icon={brands('stack-overflow')} />
            </Nav.Link>

            <Nav.Link className="link right" href="https://github.com/dinith72">
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
