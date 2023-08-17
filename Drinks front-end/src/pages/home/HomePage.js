import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail, faWineBottle, faBeer } from '@fortawesome/free-solid-svg-icons';
import './homePage.css'
import cocktail from '../../images/Cocktail.png'

const HomePage = () => {
  return (
    <div className="home-page">
      <Container className="py-5">
        <Row className="text-white">
          <Col md={4} className="mb-4">
          <img src={cocktail} 
            alt='drinks'
            style={{ width: '300px', height: 'auto' }}
            />
            {/* <FontAwesomeIcon icon={faCocktail} size="5x" /> */}
            <h3 className="mt-3">Cocktails</h3>
            <p>Enjoy a variety of cocktails handcrafted by our experts.</p>
          </Col>
          {/* <Col md={4} className="mb-4">
            <FontAwesomeIcon icon={faWineBottle} size="5x" />
            <h3 className="mt-3">Wine Selection</h3>
            <p>Explore our exquisite collection of fine wines.</p>
          </Col>
          <Col md={4} className="mb-4">
            <FontAwesomeIcon icon={faBeer} size="5x" />
            <h3 className="mt-3">Craft Beer</h3>
            <p>Discover unique flavors with our carefully selected craft beers.</p>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
