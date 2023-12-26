import React from 'react';
import './RoomCards.css'; // Importing the CSS file for styling

const RoomCards = ({ roomName, imageUrl }) => {
  return (
    <div className="room-card">
      <img src={imageUrl} alt={roomName} className="room-image"/>
      <div className="room-label">{roomName}</div>
    </div>
  );
};

export default RoomCards;
