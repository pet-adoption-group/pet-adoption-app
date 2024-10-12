import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomePage.css';
import '../pages/HomePage/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PosterCarousel() {
  return (
    <Carousel interval={3000} controls={true} indicators={true}>  {/* Interval set to 3 seconds */}
    
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slider_1.png"
          alt="First slide"
          style={{ height: '600px' }}
        />
        <Carousel.Caption>
          <h3>Adopt a Friend</h3>
          <p>Find your perfect companion today.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slider_2.png"
          alt="Second slide"
          style={{ height: '600px' }}
        />
        <Carousel.Caption>
          <h3>Be a Hero</h3>
          <p>Give a pet a forever home.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slider_3.png"
          alt="Third slide"
          style={{ height: '600px' }}
        />
        <Carousel.Caption>
          <h3>Adopt, Don't Shop</h3>
          <p>Support animal adoption.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



