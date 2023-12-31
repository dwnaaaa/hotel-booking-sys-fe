import React from 'react';
import Layout from '../Layout/Layout';
import Card from './Card';
import './FrontDesk.css';
import BookingCard from './BookingCard';

const cardsData = Array.from({ length: 20 }, (_, i) => ({
  title: `Room ${i + 1}`,
  content: 'This is a sample card content.'
}));

const confirmedBookings = [
  {
    bookingRef: "AXH57Z",
    checkInTime: "2024-01-05 14:00",
    roomType: "Deluxe Suite",
    roomQuantity: 2
  },
  {
    bookingRef: "BKH34M",
    checkInTime: "2024-01-06 15:00",
    roomType: "Single Room",
    roomQuantity: 1
  },
  {
    bookingRef: "AXH57Z",
    checkInTime: "2024-01-05 14:00",
    roomType: "Deluxe Suite",
    roomQuantity: 2
  },
  {
    bookingRef: "BKH34M",
    checkInTime: "2024-01-06 15:00",
    roomType: "Single Room",
    roomQuantity: 1
  },
];

const FrontDesk = () => {
  return (
    <Layout>
      <div className="front-desk-container">
        <div className="column column-left">
          <h1>Bookings</h1>
          <div className="booking-cards-container">
          {confirmedBookings.map((booking, index) => (
            <BookingCard
              key={index}
              bookingRef={booking.bookingRef}
              checkInTime={booking.checkInTime}
              roomType={booking.roomType}
              roomQuantity={booking.roomQuantity}
            />
          ))}
          </div>
        </div>
        
        <div className="column column-right">
        {cardsData.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FrontDesk;
