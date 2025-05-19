// src/components/Testimonials.js
import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  { name: 'John Doe', comment: 'Great service and friendly staff!', rating: 5,image: '/images/customer.jpg' },
  { name: 'Jane Smith', comment: 'Loved the haircut I got here.', rating: 4,image: '/images/review.jpeg' },
  { name: 'Michael Johnson', comment: 'A truly relaxing experience.', rating: 5,image: '/images/people.jpeg' },
  { name: 'Emily Davis', comment: 'Highly recommend their beard grooming services.', rating: 4,image: '/images/people_review.jpeg' },
  
];

const Testimonials = () => (
  <section className="testimonials">
    <h2>What Our Clients Say</h2>
    <div className="testimonial-list">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <img src={testimonial.image} alt={testimonial.title} />
          <p>"{testimonial.comment}"</p>
          <h4>- {testimonial.name}</h4>
          <p>Rating:<b> {testimonial.rating} / 5 </b></p>
        </div>
      ))}
    </div>
    <div className="book-now">
      <a href="/booking" className="btn">Book Now</a>
    </div>
  </section>
);

export default Testimonials;
