// BookingCard.js
'use client'

import React from 'react';
import './BookingCard.css';

const BookingCard = ({ bookingRef, checkInTime, roomType, roomQuantity, onBookingClick }) => {
  return (
    <div className="booking-card">
      <h4>{bookingRef}</h4>
      <p><strong>Check-In:</strong> {checkInTime}</p>
      <div className="room-details">
        <p><strong>Room Type:</strong> {roomType}</p>
        <p><strong>Booked:</strong> {roomQuantity}</p>
      </div>
      <button onClick={() => onBookingClick({ bookingRef, checkInTime, roomType, roomQuantity })}>
        Check In/Out
      </button>
    </div>
  );
};

export default BookingCard;
