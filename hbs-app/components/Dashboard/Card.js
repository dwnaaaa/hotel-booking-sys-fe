import React from 'react';
import './Card.css';
import FrontDeskButton from './Buttons/FrontDeskButton';
import HousekeepingButton from './Buttons/HousekeepingButton';
import KitchenButton from './Buttons/KitchenButton';
import ConciergeButton from './Buttons/ConciergeButton';

const Card = ({ data, title, content, status, bookingRef, checkInTime, roomType, roomQuantity, onBookingClick, onHousekeepingClick, onKitchenClick, onConciergeClick, employeeType, supervisorType }) => {
  // Set border color based on status
  const cardStyle = {
    borderColor: status === 'occupied' ? 'red' : 'green',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '5px',
    // Add other styles as necessary
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

  console.log(employeeType)

  return (
    <div className="card" style={cardStyle}>
      <h3>{title}</h3>
      <p>{content}</p>
      {employeeButton}
    </div>
  );
};

export default Card;
