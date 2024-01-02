'use client';

import React, { useState } from 'react';
import './ServicesCard.css';

function ServicesCard({ service, image, code, onCardSelect }) {
  const [quantity, setQuantity] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    setIsSelected(newQuantity > 0);
    onCardSelect(service, newQuantity);
  };

  const handleCardClick = () => {
    if (!isSelected) {
      setQuantity(1);
      setIsSelected(true);
      onCardSelect(service, 1);
    } else {
      setQuantity(0);
      setIsSelected(false);
      onCardSelect(service, 0);
    }
  };

  return (
    <div className={`service-card ${isSelected ? 'selected' : ''}`} onClick={handleCardClick}>
      <img src={image} alt={`${service} icon`} />
      <div className="service-info">
        <h5>{service}</h5>
        <small>{code}</small>
        <input 
          type="number" 
          min="0" 
          value={quantity} 
          onChange={handleQuantityChange} 
          className="quantity-input"
        />
      </div>
    </div>
  );
}

export default ServicesCard;
