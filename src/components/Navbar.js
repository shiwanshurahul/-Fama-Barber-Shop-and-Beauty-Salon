// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Create corresponding CSS for styling

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Fama Barber Shop</div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/booking">Booking</Link></li>
      <li><Link to="/testimonials">Testimonials</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
