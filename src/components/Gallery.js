import React from 'react';
import '../styles/Gallery.css';
const galleryImages = [
  '/images/images.jpeg',
  '/images/logo.jpg',
  '/images/beardo.jpg',
  '/images/salon.jpg',
  '/images/beard.jpeg',
];


const Gallery = () => (
 <section className="gallery">
      <h2>Our Barbershop Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((src, index) => (
          <img src={src} alt={`Gallery ${index + 1}`} key={index} />
        ))}
      </div>
    </section>
);

export default Gallery;
