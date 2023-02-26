import React, { Component } from "react";
import { Container } from "react-bootstrap";
import soImage from "../../assets/stack-overflow.png";
import "./card.scss";

export function SoCard(prop) {
  const userData = {
    link: "https://stackoverflow.com/users/8313114/dinith-jayabodhi",
    display_name: "dinith jayabodhi",
    reputation: 200,
    badge_counts: {
      bronze: 19,
      silver: 8,
      gold: 2,
    },
  };

  return (
    <Container>
      <a href={userData.link}>
        <div class="so-card">
          <div class="so-logo">
            <img src={soImage} alt=""></img>
          </div>
          <div class="so-header">
            <h4 class="so-display-name">{userData.display_name}</h4>
          </div>
          <div class="so-content">
            <p class="so-reputation">{userData.reputation}</p>
            <small class="so-reputation-label">Stackoverflow reputation</small>
          </div>

          <div class="so-footer">
            <span class="so-badge-wrapper">
              <span class="so-badge so-badge-gold"></span>
              <span class="so-badge-count">{userData.badge_counts.gold}</span>
            </span>

            <span class="so-badge-wrapper">
              <span class="so-badge so-badge-silver"></span>
              <span class="so-badge-count">{userData.badge_counts.silver}</span>
            </span>

            <span class="so-badge-wrapper">
              <span class="so-badge so-badge-bronze"></span>
              <span class="so-badge-count">{userData.badge_counts.bronze}</span>
            </span>
          </div>
        </div>
      </a>
    </Container>
  );
}

export default SoCard;
