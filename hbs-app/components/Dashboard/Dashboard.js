'use client';

import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import Card from './Card';
import './Dashboard.css';
import BookingCard from './BookingCard';
import HousekeepingPopup from './HousekeepingPopup'; // Import this component
import BookingDetailsPopup from './BookingDetailsPopup';
import KitchenPopup from './KitchenPopup';
import ConciergePopup from './ConciergePopup';


const FrontDesk = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleBookingClick = (booking) => {
    setSelectedBooking({ ...booking, type: 'frontdesk' });
  };

  const handleHousekeepingClick = (booking) => {
    setSelectedBooking({ ...booking, type: 'housekeeping' });
  };

  const handleKitchenClick = (booking) => {
    setSelectedBooking({ ...booking, type: 'kitchen' });
  };

  const handleConciergeClick = (booking) => {
    setSelectedBooking({ ...booking, type: 'concierge' });
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
                onHousekeepingClick={() => handleHousekeepingClick(booking)}
                onKitchenClick={() => handleKitchenClick(booking)}
                onConciergeClick={() => handleConciergeClick(booking)}
              />
            ))}
          </div>
        </div>

        <div className="column column-right">
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>

        {selectedBooking && selectedBooking.type === 'frontdesk' && (
          <BookingDetailsPopup
            bookingRef={selectedBooking.bookingRef}
            checkInTime={selectedBooking.checkInTime}
            roomType={selectedBooking.roomType}
            roomQuantity={selectedBooking.roomQuantity}
            onClose={closePopup}
          />
        )}

        {selectedBooking && selectedBooking.type === 'housekeeping' && (
          <HousekeepingPopup
            bookingRef={selectedBooking.bookingRef}
            onClose={closePopup}
          />
        )}

        {selectedBooking && selectedBooking.type === 'kitchen' && (
          <KitchenPopup
            bookingRef={selectedBooking.bookingRef}
            onClose={closePopup}
          />
        )}

        {selectedBooking && selectedBooking.type === 'concierge' && (
          <ConciergePopup
            bookingRef={selectedBooking.bookingRef}
            onClose={closePopup}
          />
        )}

      </div>
    </Layout>
  );
};

export default FrontDesk;