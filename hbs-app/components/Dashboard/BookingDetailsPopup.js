import React from 'react';
import './BookingDetailsPopup.css';

const BookingDetailsPopup = ({ bookingRef,checkInTime,roomType,roomQuantity, onClose }) => {
  return (
    <div className="booking-details-popup">
      <div className="popup-content">
        <h2>Booking Details</h2>
        <p>Booking Reference: {bookingRef}</p>
        <p>Check-In Time: {checkInTime}</p>
        <p>Room Type: {roomType}</p>
        <p>Room Quantity: {roomQuantity}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BookingDetailsPopup;
