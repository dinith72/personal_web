import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "reactstrap";
import './PageNavBar.scss'

export function PageNavbar(props) {
  return (
    <Navbar id="navBar" expand="lg">
      <Container>
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="link" href="#home">Home</Nav.Link>
            <Nav.Link className="link" href="#link">About</Nav.Link>
            <Nav.Link className="link" href="#link">Blog</Nav.Link>
            <Nav.Link className="link" href="#link">Skills</Nav.Link>
            <Nav.Link  className="link" href="#link">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
