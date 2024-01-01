import React from 'react';
import './EmployeePopup.css';

const BookingDetailsPopup = ({ bookingRef, checkInTime, roomType, roomQuantity, onClose }) => {

  const handleConfirm = () => {
    console.log("Confirm actions for room", bookingRef);
    onClose(); 
  };

  return (
    <div className="popup-container">
      <div className="popup-backdrop" onClick={onClose}></div>
      <div className="booking-details-popup">
        <h2>Booking Details - Room {bookingRef}</h2>

        <div className="popup-content">
          <p>Booking Reference: {bookingRef}</p>
          <p>Check-In Time: {checkInTime}</p>
          <p>Room Type: {roomType}</p>
          <p>Room Quantity: {roomQuantity}</p>
        </div>

        <div className="action-buttons">
          <button onClick={onClose} className="btn-close">Close</button>
          <a href="/checkout" className="btn-confirm">Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsPopup;
