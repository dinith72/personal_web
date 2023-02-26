import React, { Component } from "react";
import { Container } from "react-bootstrap";
import soImage from "../../assets/stack-overflow.png";
import axios from 'axios';
import "./card.scss";

const baseURL = 'https://api.stackexchange.com//2.3/users/8313114?order=asc&sort=reputation&site=stackoverflow&filter=!9aV0efSK4'
export function SoCard(prop) {

  const [soData, setSoData] = React.useState(null);

  React.useEffect(() => {
    const config = {
      headers:{
        Accept: 'text/plain'
      }
    };
    axios
    .get(baseURL,config)
    .then((response) => {
      setSoData(response.data.items[0]);
    });
  }, []);
  // const soData = {
  //   link: "https://stackoverflow.com/users/8313114/dinith-jayabodhi",
  //   display_name: "dinith jayabodhi",
  //   reputation: 200,
  //   badge_counts: {
  //     bronze: 19,
  //     silver: 8,
  //     gold: 2,
  //   },
  // };
  if (!soData) 
    return null;

  return (
   
    <Container>
      <a href={soData.link}>
        <div class="so-card">
          <div class="so-logo">
            <img src={soImage} alt=""></img>
          </div>
          <div class="so-header">
            <h4 class="so-display-name">{soData.display_name}</h4>
          </div>
          <div class="so-content">
            <p class="so-reputation">{soData.reputation}</p>
            <small class="so-reputation-label">Stackoverflow reputation</small>
          </div>

          <div class="so-footer">
            <span class="so-badge-wrapper">
              <span class="so-badge so-badge-gold"></span>
              <span class="so-badge-count">{soData.badge_counts.gold}</span>
            </span>

            <span class="so-badge-wrapper">
              <span class="so-badge so-badge-silver"></span>
              <span class="so-badge-count">{soData.badge_counts.silver}</span>
            </span>

            <span class="so-badge-wrapper">
              <span class="so-badge so-badge-bronze"></span>
              <span class="so-badge-count">{soData.badge_counts.bronze}</span>
            </span>
          </div>
        </div>
      </a>
    </Container>
  );
}

export default SoCard;
