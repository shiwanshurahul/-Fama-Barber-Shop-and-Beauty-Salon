import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <section className="contact">
    <h2>Contact Us</h2>
    <div className="contact-card">
      <h3 className="shop-name">Fama Barber Shop and Beauty Salon</h3>

      <div className="contact-item">
        <img src="/images/address.gif" alt="icon" className="contact-icon" />
        <div>
          <p>500 N Bell Ave #109, Denton, TX 76209</p>
        </div>
      </div>

      <div className="contact-item">
        <img src="/images/phone.gif" alt="icon" className="contact-icon" />
        <div>
          <p><a href="tel:+19406129127">+1 940-612-9127</a></p>
        </div>
      </div>

        <div className="contact-item">
        <img src="/images/rating.png" alt="icon" className="contact-icon" />
        <div>
          <p>4.6 stars <a href ="/testimonials"> (116+ reviews) </a> </p>
        </div>
      </div>

      <div className="contact-item">
        <img src="/images/time.png" alt="icon" className="contact-icon" />
        <div>
          <p>Mon–Fri: 9:00 AM – 7:00 PM<br/>Sat: 9:00 AM – 5:00 PM<br/>Sun: Closed</p>
        </div>
      </div>
    </div>

    <div className="map">
      <iframe
        title="Fama Barber Shop Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.123456789!2d-97.123456789!3d33.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd123456789ab%3A0x123456789abcdef!2sFama%20Barber%20Shop%20and%20Beauty%20Salon!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>
);

export default Contact;
