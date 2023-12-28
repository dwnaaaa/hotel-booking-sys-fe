import Layout from './Layout/Layout';
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <Layout>
    <div>
    <header className="banner-header">
    <div className="text-container">
      <h1>Le Bijou Magnifique</h1>
      <p>Immerse yourself in the splendor of Le Bijou Magnifique, a jewel nestled in an idyllic landscape that redefines luxury and tranquility. This exquisite retreat, embraced by nature's beauty and graced with breathtaking views, offers an unparalleled blend of sophisticated elegance and contemporary comfort.</p>
    </div>
    </header>

    <section class="two-column-section">
    <div class="column">
        <h1>Comfort and design to relax in the luxury hotel</h1>
        <h2>Enjoy your days with us.</h2>
        <a href="about" class="about-us-button">About Us</a>
    </div>
    <div class="column">
        <p>As your host and the Chief Executive Office of this exquisite retreat, I am thrilled to invite you into a world where luxury meets comfort. Our dedicated team is committed to ensuring your stay is both memorable and rejuvenating, enveloping you in an ambiance of sophistication and serene elegance. We eagerly await the opportunity to make your experience with us nothing short of extraordinary.</p>

        <section class="manager-message-section">
          <div class="left-column">
              <h3 class="manager-name">Marie Ashley Ordoñez</h3>
              <p class="manager-title">CEO, Le Bijou Magnifique</p>
          </div>
          <div class="right-column">
              <img src="/images/manager-sign.png" alt="Manager's Signature" class="manager-signature"></img>
        </div>
      </section>


    </div>
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
