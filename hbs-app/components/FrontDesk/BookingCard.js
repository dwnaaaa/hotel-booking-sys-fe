// BookingCard.js
'use client'

import React, { useState } from 'react';
import './BookingCard.css'; // Make sure to create a corresponding CSS file
import BookingDetailsPopup from './BookingDetailsPopup'; // Import your BookingDetails component

const BookingCard = ({ bookingRef, checkInTime, roomType, roomQuantity, onPopupOpen, onPopupClose }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setPopupOpen(true);
    onPopupOpen(); // Notify FrontDesk that the popup is open
  };

  const closePopup = () => {
    setPopupOpen(false);
    onPopupClose(); // Notify FrontDesk that the popup is closed
  };

  return (
    <div className="booking-card">
      <div className={`booking-details ${isPopupOpen ? 'popup-open' : ''}`} >
        <h4>{bookingRef}</h4>
        <p><strong>Check-In:</strong> {checkInTime}</p>
        <div className="room-details">
          <p><strong>Room Type:</strong> {roomType}</p>
          <p><strong>Booked:</strong> {roomQuantity}</p>
        </div>
        <button onClick={handleButtonClick}>Check In/Out</button>
      </div>

      {isPopupOpen && 
        <BookingDetailsPopup 
          bookingRef={bookingRef}
          checkInTime={checkInTime}
          roomType={roomType}
          roomQuantity={roomQuantity}
          onClose={closePopup} 
        />}
    </div>
  );
};

export default BookingCard;
