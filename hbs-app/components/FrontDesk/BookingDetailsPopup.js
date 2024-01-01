// BookingDetailsPopup.js

import React from 'react';
import './BookingDetailsPopup.css'; // Make sure to create a corresponding CSS file

const BookingDetailsPopup = ({ bookingRef, checkInTime, roomType, roomQuantity, onClose }) => {
  return (
    <div className="popup-container">
      <div className="booking-details-popup">
        {/* Popup content goes here */}
        <h2>Booking Details</h2>
        <p><strong>Booking Reference:</strong> {bookingRef}</p>
        <p><strong>Check-In:</strong> {checkInTime}</p>
        <p><strong>Room Type:</strong> {roomType}</p>
        <p><strong>Booked:</strong> {roomQuantity}</p>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="popup-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default BookingDetailsPopup;