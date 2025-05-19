// src/components/BookingForm.js
import React, { useState } from 'react';
import '../styles/BookingForm.css'; // Create corresponding CSS for styling

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  //remove autoloading
    
    alert('Booking submitted!');
    // Reset form
    setFormData({
      name: '',
      service: '',
      date: '',
      time: '',
      contact: '',
    });
  };

  return (
    <section className="booking-form">
      <div className='div_booking'>
      <h2>Book an Appointment</h2>
      
      <img src="/images/booking.jpeg" alt="Haircut at Fama Barbershop" className="booking-image" />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Service:
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="Haircut">Haircut</option>
            <option value="Shave">Shave</option>
            <option value="Hair Coloring">Hair Coloring</option>
            {/* Add more services as needed */}
          </select>
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>
        <label>
          Contact Number:
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
        </label>
        <button type="submit">Submit Booking</button>
      </form>
    </section>
  );
};

export default BookingForm;
