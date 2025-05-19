import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing page components
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

// Importing shared components
import Hero from './components/Hero'
import BookingForm from './components/BookingForm'
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

// Importing global styles
import './styles/Navbar.css';
import './styles/Hero.css';
import './styles/Services.css';
import './styles/Testimonials.css';
import './styles/BookingForm.css';
import './styles/Gallery.css';
import './styles/Contact.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar displayed on all pages */}
        <Navbar />

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>

        {/* Footer displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
