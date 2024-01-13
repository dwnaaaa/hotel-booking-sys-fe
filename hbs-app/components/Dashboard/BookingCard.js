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



const BookingCard = ({ booking, onBookingClick, onHousekeepingClick, onKitchenClick, onConciergeClick, onCancelClick, employeeType, supervisorType }) => {
  const handleCancel = () => {
    // Implement cancel logic
    console.log("Cancel clicked");
  };
  let employeeButton = null

  if(employeeType === 'F' || (employeeType === 'S' && supervisorType === 'F')) {
    employeeButton = <FrontDeskButton onClick={() => onBookingClick(booking)} label="" />
  } 
  else if(employeeType === 'H' || (employeeType === 'S' && supervisorType === 'H')) {
    employeeButton = <HousekeepingButton onClick={() => onHousekeepingClick({booking})} label="" />
  } 
  else if(employeeType === 'K' || (employeeType === 'S' && supervisorType === 'K')) {
    employeeButton = <KitchenButton onClick={() => onKitchenClick({booking})} label="" />
  }
  else if(employeeType === 'C' || (employeeType === 'S' && supervisorType === 'C')) {
    employeeButton = <ConciergeButton onClick={() => onConciergeClick({booking})} label="" />
  }


const dateTime = new Date(booking.checkInDate);
// Format the date and time
console.log(booking.checkInTime)
const options = { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
};
const formattedDateTime = dateTime.toLocaleString('en-US', options);

let roomType = null
switch(booking.roomType) {
  case 'D':
    roomType = 'Deluxe'
    break
  case 'G':
    roomType = 'Grand'
    break
  case 'S':
    roomType = 'Suite'
    break
  case 'E':
    roomType = 'Executive'
    break
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

      <h4>{booking.brn}</h4>
      <p><strong>Check-In:</strong> {formattedDateTime}</p>
      <div className="room-details">
        <p><strong>Room Type:</strong> {roomType}</p>
        <p><strong>Booked:</strong> {booking.noOfRooms} rooms</p>
      </div> 

    </div>
  );
};

export default BookingCard;
