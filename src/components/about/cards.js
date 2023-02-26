import React, { Component } from "react";
import { Container } from "react-bootstrap";
import soImage from '../../assets/stack-overflow.png';
import "./card.scss";

export function Cards(prop) {
  const userData = {
    link: "a.com",
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
      <div class="so-card">
        {/* <a href="{{=it.profile_url}}" target="_blank" class="so-profile-link"></a> */}
        <div class="so-logo">
          <img src={soImage} alt="" ></img>
        </div   >
        <div class="so-header">
          <h4 class="so-display-name">{userData.display_name}</h4>
        </div>
        <div class="so-content">
          <p class="so-reputation">{userData.reputation}</p>
          <small class="so-reputation-label">Stackoverflow reputation</small>
        </div>

        <div class="so-footer">
          {/* <span class="so-badges-label">Badges</span> */}

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
    </Container>
  );
}

export default Cards;
