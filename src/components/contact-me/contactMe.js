import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./contactme.scss";

const ContactMe = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Row>
        <Col lg="6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control data-input"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control data-input"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                name="message"
                className="form-control data-input"
                id="message"
                cols="30"
                rows="6"
                placeholder="Message"
              ></textarea>
            </div>
            <Button id="resume" variant="outline-success" size="lg">
              Send Message
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
