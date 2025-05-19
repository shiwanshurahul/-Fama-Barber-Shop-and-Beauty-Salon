import React from 'react';
import '../styles/Services.css';

const services = [
  {
    title: 'Haircut',
    description: 'Professional haircut tailored to your style.',
    price: '$25',
    image: '/images/hair_cut.jpg',
  },
  {
    title: 'Shave',
    description: 'Clean and precise shaving experience.',
    price: '$15',
    image: '/images/shave.png',
  },
  {
    title: 'Hair Coloring',
    description: 'Vibrant and lasting hair colors.',
    price: '$40',
    image: '/images/color.jpg',
  },
  // Add more services as needed
];

const features = [
  {
    title: 'Experienced Barbers',
    description: 'Our team has over 10 years of experience in the industry.',
    image: '/images/haircut.jpg',
  },
  {
    title: 'Quality Products',
    description: 'We use only the best products for your hair and skin.',
    image: '/images/barber.jpeg',
  },
  {
    title: 'Customer Satisfaction',
    description: 'We prioritize your satisfaction and comfort above all.',
    image: '/images/barber_pic.jpg',
  },
];

const galleryImages = [
  '/images/images.jpeg',
  '/images/logo.jpg',
  '/images/beardo.jpg',
  '/images/salon.jpg',
  '/images/beard.jpeg',
];

const Services = () => (
  <div className="services-page">
    {/* Service Cards Grid */}
    <section className="services">
      <h2>Our Services</h2>
      <p className="services-intro">
  At PMC Barbershop, we blend traditional barbering techniques with contemporary styling to deliver the perfect look. Our skilled barbers specialize in precision cuts, beard grooming, and relaxing hot towel shaves, all within a classic barbershop atmosphere. Located in Denton, TX, we are dedicated to providing top-notch grooming services that leave you looking and feeling your best.
</p>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <img src={service.image} alt={service.title} />
            <p>{service.description}</p>
            <p className="price">{service.price}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Why We Are the Best */}
    <section className="why-us">
      <h2>Why We Are the Best</h2>
      <div className="why-us-grid">
        {features.map((feature, index) => (
          <div className="why-us-item" key={index}>
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Barbershop Gallery */}
    <section className="gallery">
      <h2>Our Barbershop Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((src, index) => (
          <img src={src} alt={`Gallery ${index + 1}`} key={index} />
        ))}
      </div>
    </section>
  </div>
);

export default Services;


