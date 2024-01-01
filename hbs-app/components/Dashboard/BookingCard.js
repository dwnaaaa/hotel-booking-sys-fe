// BookingCard.js
'use client'

import React from 'react';
import './BookingCard.css';
import Button from './Button';


const BookingCard = ({ bookingRef, checkInTime, roomType, roomQuantity, onBookingClick, onHousekeepingClick, onKitchenClick, onConciergeClick }) => {
  return (
    <div className="booking-card">
      <h4>{bookingRef}</h4>
      <p><strong>Check-In:</strong> {checkInTime}</p>
      <div className="room-details">
        <p><strong>Room Type:</strong> {roomType}</p>
        <p><strong>Booked:</strong> {roomQuantity}</p>
      </div> 
      <Button onClick={() => onBookingClick({ bookingRef, checkInTime, roomType, roomQuantity})} label="Check In/Out" />
      <Button onClick={() => onHousekeepingClick({bookingRef})} label="Housekeeping" />
      <Button onClick={() => onKitchenClick({bookingRef})} label="Kitchen" />
      <Button onClick={() => onConciergeClick({bookingRef})} label="Concierge" />
    </div>
  );
};

export default BookingCard;
