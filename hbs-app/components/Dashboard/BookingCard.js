// BookingCard.js
'use client'

import React from 'react';
import './BookingCard.css';
import Button from './Button';



const BookingCard = ({ bookingRef, checkInTime, roomType, roomQuantity, onBookingClick, onHousekeepingClick, onKitchenClick, onConciergeClick, onCancelClick }) => {

  const handleCancel = () => {
    // Implement cancel logic
    console.log("Cancel clicked");
  };

  return (
    <div className="booking-card">
            
          <div className="buttons-container">
            <Button onClick={() => onBookingClick({ bookingRef, checkInTime, roomType, roomQuantity})} label="" />
            <Button onClick={() => onHousekeepingClick({bookingRef})} label="" />
            <Button onClick={() => onKitchenClick({bookingRef})} label="" />
            <Button onClick={() => onConciergeClick({bookingRef})} label="" />

            <div className="cancel-button-container">
            <button onClick={handleCancel} className="cancel-button">
              <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            </div>

          </div>

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
