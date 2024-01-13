import React from 'react';
import Layout from '../Layout/Layout';
import './About.css'; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <Layout>
      <div className="about-container">
        <h1>Welcome to Le Bijou Magnifique</h1>
        <p>Discover the unique experiences and unmatched hospitality of our hotel.</p>

        <section className="our-story">
          <h2>Our Story</h2>
          <p>Learn about our journey from a modest inn to a premier destination for travelers worldwide.</p>
        </section>

        <section className="our-values">
          <h2>Our Values</h2>
          <p>At the heart of our service are values that prioritize guest satisfaction, comfort, and memorable experiences.</p>
        </section>

        <section className="team-section">
        <div className="team-intro">
          <h2>Meet Our Team</h2>
          <p>Our dedicated team members are the backbone of our service, ensuring your stay is perfect in every way.</p>
        </div>

        <div className="team-members">
          {/* Repeat this block for each team member */}
          <div className="team-member-card">
            <img src="/images/team/baclig.jpg" alt="Isabel Baclig" className="team-member-photo" />
            <div className="team-member-info">
              <h3>Marie Ashley Ordoñez</h3>
              <p>CEO</p>
            </div>
          </div>

          <div className="team-member-card">
            <img src="/images/team/ordonez.jpg" alt="Marie Ashley Ordoñez" className="team-member-photo" />
            <div className="team-member-info">
              <h3>Marie Ashley Ordoñez</h3>
              <p>CEO</p>
            </div>
          </div>

          <div className="team-member-card">
            <img src="/images/team/sablay.jpg" alt="James Sablay" className="team-member-photo" />
            <div className="team-member-info">
              <h3>James Sablay</h3>
              <p>CEO</p>
            </div>
          </div>

          <div className="team-member-card">
            <img src="/images/team/buguis.jpg" alt="Francesca Maries Buguis" className="team-member-photo" />
            <div className="team-member-info">
              <h3>Francesca Maries Buguis</h3>
              <p>CEO</p>
            </div>
          </div>

          <div className="team-member-card">
            <img src="/images/team/villanueva.jpg" alt="Jonalyn Villanueva" className="team-member-photo" />
            <div className="team-member-info">
              <h3>Jonalyn Villanueva</h3>
              <p>CEO</p>
            </div>
          </div>



        </div>
      </section>
      </div>
    </Layout>
  );
};

export default About;
