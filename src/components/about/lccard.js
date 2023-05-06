import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import lcLogo from '../../assets/leetcode.webp';
import './lccard.scss';

const baseURL = 'https://leetcode-stats-api.herokuapp.com/jdinith72';
const Lccard = () => {
  const [lcData, setLcData] = React.useState(null);

  React.useEffect(() => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    axios.get(baseURL, config).then((response) => {
      if (response.status == 200) {
        const data = {
          rank: response.data?.ranking,
          easySolved: response.data?.easySolved,
          mediumSolved: response.data?.mediumSolved,
          hardSolved: response.data?.hardSolved,
        };
        setLcData(data);
      }
    });
  }, []);

  if (!lcData) return null;
  return (
    <Container>
      <a href='https://leetcode.com/jdinith72/'>
        <div className='lc-card'>
          <Row>
            <Col lg='4'>
              <div className='lc-logo'>
                <img src={lcLogo} alt=''></img>
              </div>
            </Col>
            <Col lg='8'>
              <div className='lc-header'>
              <h3 className='lc-display-name'> Leetcode</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <div className='lc-content'>
              <p className='lc-reputation'>{lcData.rank}</p>
              <small className='lc-reputation-label'>Rank</small>
            </div>
          </Row>
          <Row>
            <span className='lc-badge-wrapper'>
              <h4 className='lc-header'> Problems Solved</h4>
              <p className='lc-badges-label'> Easy : {lcData.easySolved} </p>
              <p className='lc-badges-label'> Medium : {lcData.mediumSolved} </p>
              <p className='lc-badges-label'> Hard : {lcData.hardSolved} </p>         
            </span>
          </Row>

        </div>
      </a>
    </Container>
  );
};

export default Lccard;
