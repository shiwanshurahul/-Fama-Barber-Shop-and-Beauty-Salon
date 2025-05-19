import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Fama Barber Shop</h3>
          <p>Experience the best grooming services in town.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/booking">Book Appointment</a></li>
            <li><a href="/testimonials">Testimonals</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>500 N Bell Ave #109, Denton, TX 76209</p>
          <p>Email: info@famabarbershop.com</p>
          <p>Phone: +1 940-612-9127</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fama Barber Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
