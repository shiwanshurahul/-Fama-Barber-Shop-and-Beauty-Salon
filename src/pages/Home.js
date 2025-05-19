// src/pages/Home/Home.js
import React from 'react';

import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import BookingForm from '../components/BookingForm';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';


const Home = () => (
  <>
     <Hero />
     <Services />
    <Testimonials /> 
  </>
);

export default Home;
