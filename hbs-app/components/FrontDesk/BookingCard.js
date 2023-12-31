import React from 'react';
import './BookingCard.css'; // Make sure to create a corresponding CSS file

const BookingCard = ({ bookingRef, checkInTime, roomType, roomQuantity }) => {
  return (
    <div className="booking-card">
      <h4>{bookingRef}</h4>
      <p><strong>Check-In:</strong> {checkInTime}</p>
      <div className="room-details">
        <p><strong>Room Type:</strong> {roomType}</p>
        <p><strong>Booked:</strong> {roomQuantity}</p>
      </div>
    </div>
  );
};

export default BookingCard;
