'use client';

import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import Card from './Card';
import './FrontDesk.css';
import BookingCard from './BookingCard';
import BookingDetailsPopup from './BookingDetailsPopup'; // Import this component

const FrontDesk = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleBookingClick = (booking) => {
    setSelectedBooking(booking);
  };

  const closePopup = () => {
    setSelectedBooking(null);
  };

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
    // ... Add more bookings as needed
  ];

  const cardsData = Array.from({ length: 20 }, (_, i) => ({
    title: `Room ${i + 1}`,
    content: 'This is a sample card content.'
  }));

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
                onBookingClick={() => handleBookingClick(booking)}
              />
            ))}
          </div>
        </div>

        <div className="column column-right">
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>

        {selectedBooking && (
          <BookingDetailsPopup
            bookingRef={selectedBooking.bookingRef}
            checkInTime={selectedBooking.checkInTime}
            roomType={selectedBooking.roomType}
            roomQuantity={selectedBooking.roomQuantity}
            onClose={closePopup}
          />
        )}
      </div>
    </Layout>
  );
};

export default FrontDesk;