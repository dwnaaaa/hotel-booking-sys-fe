// BookingCard.js
'use client'

import React from 'react';
import './BookingCard.css';
import Button from './Buttons/Button';
import FrontDesk from './Dashboard';
import FrontDeskButton from './Buttons/FrontDeskButton';
import ConciergeButton from './Buttons/ConciergeButton';
import KitchenButton from './Buttons/KitchenButton';
import HousekeepingButton from './Buttons/HousekeepingButton';



const BookingCard = ({ bookingRef, checkInTime, roomType, roomQuantity, onBookingClick, onHousekeepingClick, onKitchenClick, onConciergeClick, onCancelClick, employeeType, supervisorType }) => {

  const handleCancel = () => {
    // Implement cancel logic
    console.log("Cancel clicked");
  };
  let employeeButton = null

  if(employeeType === 'F' || (employeeType === 'S' && supervisorType === 'F')) {
    employeeButton = <FrontDeskButton onClick={() => onBookingClick({ bookingRef, checkInTime, roomType, roomQuantity})} label="" />
  } 
  else if(employeeType === 'H' || (employeeType === 'S' && supervisorType === 'H')) {
    employeeButton = <HousekeepingButton onClick={() => onHousekeepingClick({bookingRef})} label="" />
  } 
  else if(employeeType === 'K' || (employeeType === 'S' && supervisorType === 'K')) {
    employeeButton = <KitchenButton onClick={() => onKitchenClick({bookingRef})} label="" />
  }
  else if(employeeType === 'C' || (employeeType === 'S' && supervisorType === 'C')) {
    employeeButton = <ConciergeButton onClick={() => onConciergeClick({bookingRef})} label="" />
  }

  return (
    <div className="booking-card">
            
          <div className="buttons-container">
            {employeeButton}
            <div className="cancel-button-container">
              {
                employeeType === 'S' ? 
                <button onClick={handleCancel} className="cancel-button">
                  <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button> : null
              }
              
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
