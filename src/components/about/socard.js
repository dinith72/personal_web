import React from "react";
import { Container , Row , Col} from "react-bootstrap";
import soImage from "../../assets/stack-overflow.webp";
import axios from 'axios';
import "./socard.scss";

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
        <div className="so-card"  >
          <Row>
            <Col lg="4">
            <div className="so-logo">
            <img src={soImage} alt=""></img>
          </div>
            </Col>
            <Col lg="8">
            <div className="so-header">
              <h3 className="so-display-name"> Stack Overflow</h3>
          </div>
            </Col>
          </Row>
          <div className="so-content">
            <p className="so-reputation">{soData.reputation}</p>
            <small className="so-reputation-label">reputation</small>
          </div>

          <div className="so-footer">
            <span className="so-badge-wrapper">
              <span className="so-badge so-badge-gold"></span>
              <span className="so-badge-count">{soData.badge_counts.gold}</span>
            </span>

            <span className="so-badge-wrapper">
              <span className="so-badge so-badge-silver"></span>
              <span className="so-badge-count">{soData.badge_counts.silver}</span>
            </span>

            <span className="so-badge-wrapper">
              <span className="so-badge so-badge-bronze"></span>
              <span className="so-badge-count">{soData.badge_counts.bronze}</span>
            </span>
          </div>
        </div>
      </a>
    </Container>
  );
}

export default SoCard;
