import React, { useState } from 'react';
import './HousekeepingPopup.css'; // Make sure this is correctly imported

const HousekeepingPopup = ({ bookingRef, onClose }) => {
  const [damage, setDamage] = useState('');
  const [isCleaned, setIsCleaned] = useState(false);
  const [productQuantities, setProductQuantities] = useState({
    Water: 0,
    Snacks: 0,
    Towels: 0,
    Soap: 0,
    Chips: 0
  });

  const handleCleanClick = () => {
    setIsCleaned(prevState => !prevState);
    console.log("Room cleaning status toggled:", bookingRef, !isCleaned);
  };

  const handleDamageChange = (event) => {
    setDamage(event.target.value);
  };

  const handleProductQuantityChange = (product, value) => {
    const newQuantity = value === '' ? 0 : parseInt(value, 10);
    setProductQuantities(prevQuantities => ({
      ...prevQuantities,
      [product]: newQuantity
    }));
  };


  const handleConfirm = () => {
    // Handle confirm logic here
    console.log("Confirm actions for room", bookingRef);
    onClose(); // Assuming you want to close the popup after confirm
  };



  return (
    <div className="popup-container">
      <div className="popup-backdrop" onClick={onClose}></div>
      <div className="booking-details-popup">
        <h2>Housekeeping - Room {bookingRef}</h2>

        <div className="clean-damage-container">
          <button 
            className={`btn-clean ${isCleaned ? 'cleaned' : ''}`} 
            onClick={handleCleanClick}
          >
            {isCleaned ? 'Room Cleaned ✔' : 'Clean Room'}
          </button>

          <input 
            type="text" 
            placeholder="Report damage" 
            value={damage} 
            onChange={handleDamageChange} 
            className="input-damage"
          />
        </div>

        <label>Products</label>

        <div className="products-scrollbox">
        <div className="products-flexbox">
        {Object.entries(productQuantities).map(([product, quantity]) => (
          <div key={product} className="product-item">
            <div>{product}</div>
            <input 
              type="number" 
              min="0" 
              className="product-quantity-input"
              value={quantity.toString()} // Convert number to string for the input value
              onChange={e => handleProductQuantityChange(product, e.target.value)}
            />
          </div>
        ))}
      </div>

        </div>


        <div className="action-buttons">
          <button onClick={onClose} className="btn-close">Close</button>
          <button onClick={handleConfirm} className="btn-confirm">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default HousekeepingPopup;
