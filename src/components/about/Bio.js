import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import bio_me from "../../assets/bio_me.webp";
import bio_cert1 from "../../assets/bio_cert1.webp";
import bio_cert2 from "../../assets/bio_cert2.webp";
import "./Bio.scss";

export function Bio(params) {
  return (
    <Container id="bio">
      <Row>
        <Col lg="6" md="6">
          <img src={bio_me} alt="bio_me" />
        </Col>
        <Col lg="3" md="5">
          <a href="https://www.credly.com/badges/ee15b8c8-754b-4e8f-9128-120650a0a67b/public_url">
            <img src={bio_cert1} alt="bio_cert1" className="certImg" />
          </a>
        </Col>
        <Col lg="3" md="5">
          <a href='https://www.credly.com/badges/a44058f4-6c3f-4f98-9d14-3b84c4175b8e/public_url'>
                <img src={bio_cert2} alt='bio_cert2' className='certImg' />
                </a>
         
        </Col>
      </Row>

      <p>
        I would like to gain exposure on Software Engineering, Ux/Ui design and
        Branding aspects in the context of the business organization, putting in
        place the academic qualifications and exposure I have gained over the
        years, to be goal congruent and aligning with the best practices of the
        organization.
      </p>
    </Container>
  );
}

export default Bio;
