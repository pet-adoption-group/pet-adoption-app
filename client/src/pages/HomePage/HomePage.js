// src/pages/HomePage/HomePage.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div>
      <header className="hero-section">
        <h1>Welcome to Pet Adoption</h1>
        <p>Find your perfect companion today!</p>
      </header>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/slider_1.png" alt="First slide" />
          <Carousel.Caption>
            <h3>Adopt a Friend</h3>
            <p>Find your perfect companion today.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/slider_2.png" alt="Second slide" />
          <Carousel.Caption>
            <h3>Be a Hero</h3>
            <p>Give a pet a forever home.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomePage;


