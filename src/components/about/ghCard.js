import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ghImage from "../../assets/gh-logo.webp";
import axios from "axios";
import "./ghCard.scss";

const baseURL = "https://api.github.com/users/dinith95";
export function GhCard(prop) {
  const [ghData, setGhData] = React.useState(null);

  React.useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    axios.get(baseURL, config).then((response) => {
      setGhData(response.data);
    });
  }, []);

  if (!ghData) return null;

  return (
    <Container>
      <a href={ghData.html_url}>
        <div className="gh-card">
          <Row>
            <Col lg="4">
              <div className="gh-logo">
                <img src={ghImage} alt=""></img>
              </div>
            </Col>
            <Col lg="8">
              <h3 className="gh-display-name"> Github</h3>
            </Col>
          </Row>

          <Row id="gh-content">
            <p>{ghData.public_repos}</p>
            <small>repos</small>
          </Row>

          <Row id="follow">
            <Col lg="4">
              <p> {ghData.followers}</p>
              <small> followers</small>
            </Col>

            <Col lg="4">
              <p> {ghData.following}</p>
              <small> following</small>
            </Col>
          </Row>
        </div>
      </a>
    </Container>
  );
}

export default GhCard;
