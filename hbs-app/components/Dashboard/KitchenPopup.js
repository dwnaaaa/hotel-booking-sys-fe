import React, { useState } from 'react';
import './HousekeepingPopup.css'; // Make sure this is correctly imported

const KitchenPopup = ({ bookingRef, onClose }) => {
  // const [damage, setDamage] = useState('');
  // const [isCleaned, setIsCleaned] = useState(false);
  const [productQuantities, setProductQuantities] = useState({
    Breakfast: 0,
    Lunch: 0,
    Dinner: 0
  });

  const [beverageQuantities, setBeverageQuantities] = useState({
    Water: 0,
    Coke: 0,
    Juice: 0
  });

  // const handleCleanClick = () => {
  //   setIsCleaned(prevState => !prevState);
  //   console.log("Room cleaning status toggled:", bookingRef, !isCleaned);
  // };

  // const handleDamageChange = (event) => {
  //   setDamage(event.target.value);
  // };

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
        <h2>Kitchen - Room {bookingRef}</h2>

        <label>Food</label>

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

        <label>Beverages</label>

        <div className="products-scrollbox">
        <div className="products-flexbox">
        {Object.entries(beverageQuantities).map(([beverage, quantity]) => (
          <div key={beverage} className="product-item">
            <div>{beverage}</div>
            <input 
              type="number" 
              min="0" 
              className="product-quantity-input"
              value={quantity.toString()} // Convert number to string for the input value
              onChange={e => handleProductQuantityChange(beverage, e.target.value)}
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

export default KitchenPopup;
