import React from 'react';
import Layout from '../Layout/Layout';
import './RoomAndSuites.css'; // Ensure you have this CSS file

const RoomAndSuites = () => {
  return (
    <Layout>
      <div className="room-suites-container">
        <h1>Rooms and Suites</h1>
        <div className="rooms-container">
          {/* Repeat this block for each room type */}
          <div className="room-card">
          <div className="room-image-container">
              <img src="images\rooms\twin.jpg" alt="Room Image" />
          </div>
          <div className="room-details">
              <h1>Twin Room</h1>
              <p className="room-description">A cozy retreat perfect for friends or siblings, our Twin Room features two single beds in a beautifully designed space. Enjoy modern amenities, a serene atmosphere, and a view that adds a touch of relaxation to your stay.</p>
              <ul className="room-services">
                  <li>Complimentary Wi-Fi</li>
                  <li>Daily Housekeeping</li>
                  <li>Room Service</li>
                  <li>Laundry Service</li>
                  <li>Climate Control</li>
              </ul>
          </div>
      </div>

      <div className="room-card">
          <div className="room-image-container">
              <img src="images\rooms\deluxe twin.jpg" alt="Room Image" />
          </div>
          <div className="room-details">
              <h1>Deluxe Twin Room</h1>
              <p className="room-description">Elevate your experience in our Deluxe Twin Room, boasting extra space and luxury. With two large beds, sophisticated decor, and a range of premium amenities, it's an ideal choice for those seeking comfort with a touch of elegance.</p>
              <ul className="room-services">
                  <li>Mini-Bar</li>
                  <li>Premium TV Channels</li>
                  <li>Bathrobes and Slippers</li>
                  <li>In-Room Safe</li>
                  <li>Balcony Views</li>
              </ul>
          </div>
      </div>

      <div className="room-card">
          <div className="room-image-container">
              <img src="images\rooms\double deck.jpg" alt="Room Image" />
          </div>
          <div className="room-details">
              <h1>Double Deck Room</h1>
              <p className="room-description">Our Double Deck Room offers a fun and unique stay, especially for younger guests or friends. Featuring bunk beds, a vibrant decor, and all essential comforts, it's perfect for adventurous spirits looking for an unconventional lodging experience.</p>
              <ul className="room-services">
                  <li>Bunk Bed Arrangement</li>
                  <li>Gaming Console</li>
                  <li>Coffee Maker</li>
                  <li>Work Desk</li>
                  <li>Complimentary Bottled Water</li>
              </ul>
          </div>
      </div>

      <div className="room-card">
          <div className="room-image-container">
              <img src="images\rooms\king.jpg" alt="Room Image" />
          </div>
          <div className="room-details">
              <h1>King Room</h1>
              <p className="room-description">Indulge in the ultimate luxury in our King Room, where elegance meets comfort. The room features a plush king-sized bed, opulent furnishings, and state-of-the-art amenities, making it perfect for couples or anyone desiring a lavish stay.</p>
              <ul className="room-services">
                  <li>King-Sized Bed</li>
                  <li>Jacuzzi Tub</li>
                  <li>Room Automation System</li>
                  <li>VIP Room Service</li>
                  <li>Personal Concierge Service</li>
              </ul>
          </div>
      </div>


          {/* ... other room types ... */}
        </div>
      </div>
    </Layout>
  );
}

export default RoomAndSuites;
