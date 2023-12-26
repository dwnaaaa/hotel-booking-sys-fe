import Layout from './Layout/Layout';
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <Layout>
    <div>
      <header>
        <h1>Welcome to Our Hotel Booking System</h1>
        <p>Find great deals on hotels, resorts, and private rentals.</p>
      </header>

      <section className="booking-form">
        <h2>Book Your Stay</h2>
        <form>
          <input type="text" placeholder="Destination, hotel, or address" />
          <input type="date" placeholder="Check-in" />
          <input type="date" placeholder="Check-out" />
          <button type="submit">Search</button>
        </form>
      </section>

      <section className="featured-hotels">
        <h2>Featured Hotels</h2>
        {/* You would fetch and display featured hotels here */}
      </section>

      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        {/* Testimonials would go here */}
      </section>

      <footer>
        {/* Footer content here */}
      </footer>
    </div>
    </Layout>
  );
};

export default LandingPage;
