// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css'; // Create corresponding CSS for styling

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Welcome to Fama Barber Shop and Beauty Salon</h1>
      <p>Experience the best grooming services in Denton, TX.</p>
      <a href="/booking" className="btn">Book Now</a>
    </div>
  </section>
);

export default Hero;
