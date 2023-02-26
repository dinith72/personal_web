import React, { Component } from "react";
import { Container } from "react-bootstrap";
import soImage from "../../assets/stack-overflow.png";
import axios from 'axios';
import "./card.scss";

const baseURL = 'https://api.stackexchange.com/2.3/users/8313114?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=reputation&filter=!9aK1GUJ.d'
export function SoCard(prop) {

  const [soData, setSoData] = React.useState(null);

  React.useEffect(() => {
    const config = {
      headers:{
        Accept: 'application/json'
      }
    };
    axios
    .get(baseURL,config)
    .then((response) => {
      setSoData(response.data.items[0]);
    });
  }, []);
 
  if (!soData) 
    return null;

  return (
   
    <Container>
      <a href={soData.link}>
        <div class="so-card"  >
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
