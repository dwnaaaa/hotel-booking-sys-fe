import React from 'react';
import './Card.css';
import FrontDeskButton from './Buttons/FrontDeskButton';
import HousekeepingButton from './Buttons/HousekeepingButton';
import KitchenButton from './Buttons/KitchenButton';
import ConciergeButton from './Buttons/ConciergeButton';

const Card = ({ title, content, status, bookingRef, checkInTime, roomType, roomQuantity, onBookingClick, onHousekeepingClick, onKitchenClick, onConciergeClick }) => {
  // Set border color based on status
  const cardStyle = {
    borderColor: status === 'occupied' ? 'red' : 'green',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '5px',
    // Add other styles as necessary
  };

  return (
    <div className="card" style={cardStyle}>
      <h3>{title}</h3>
      <p>{content}</p>

      {/* <div className="buttons-container"> */}
          <FrontDeskButton onClick={() => onBookingClick({ bookingRef, checkInTime, roomType, roomQuantity})} label="" />
          <HousekeepingButton onClick={() => onHousekeepingClick({bookingRef})} label="" />
          <KitchenButton onClick={() => onKitchenClick({bookingRef})} label="" />
          <ConciergeButton onClick={() => onConciergeClick({bookingRef})} label="" />
      {/* </div> */}
    </div>
  );
};

export default Card;
