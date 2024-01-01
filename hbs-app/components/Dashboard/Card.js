import React from 'react';
import './Card.css';

const Card = ({ title, content, status }) => {
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
    </div>
  );
};

export default Card;
