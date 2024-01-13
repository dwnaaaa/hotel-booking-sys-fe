'use client'

import React, { useEffect, useState } from 'react';
import './Card.css';
import FrontDeskButton from './Buttons/FrontDeskButton';
import HousekeepingButton from './Buttons/HousekeepingButton';
import KitchenButton from './Buttons/KitchenButton';
import ConciergeButton from './Buttons/ConciergeButton';

const Card = ({ data, bookingRef, onBookingClick, onHousekeepingClick, onKitchenClick, onConciergeClick, employeeType, supervisorType }) => {
  // Set border color based on status
  const cardStyle = {
    borderColor: data.bookedBrn === "VACANT" ? 'green' : 'red',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '5px',
    // Add other styles as necessary
  };
  let employeeButton = null

  if(employeeType === 'F' || (employeeType === 'S' && supervisorType === 'F')) {
    employeeButton = <FrontDeskButton onClick={() => onBookingClick(data)} label="" />
  } 
  else if(employeeType === 'H' || (employeeType === 'S' && supervisorType === 'H')) {
    employeeButton = <HousekeepingButton onClick={() => onHousekeepingClick(data.bookedBrn)} label="" />
  } 
  else if(employeeType === 'K' || (employeeType === 'S' && supervisorType === 'K')) {
    employeeButton = <KitchenButton onClick={() => onKitchenClick(data.bookedBrn)} label="" />
  }
  else if(employeeType === 'C' || (employeeType === 'S' && supervisorType === 'C')) {
    employeeButton = <ConciergeButton onClick={() => onConciergeClick(data.bookedBrn)} label="" />
  }

  const [roomType, setRoomType] = useState('')

  

  useEffect(() => {
    switch(data.roomType) {
      case 'D':
        setRoomType('Deluxe')
        break
      case 'G':
        setRoomType('Grand')
        break
      case 'S':
        setRoomType('Suite')
        break
      case 'E':
        setRoomType('Executive')
        break
      case 'S':
        setRoomType('Suite')
        break
    }
  }, [])

  return (
    <div className="card" style={cardStyle}>
      <h3>Room {data.roomNumber}</h3>
      <p>{roomType}</p>
      {employeeButton}
    </div>
  );
};

export default Card;
