import React, { useState } from 'react';
import './PopupGlobal.css';

const ConciergePopup = ({ bookingRef, onClose }) => {
  const serviceCodeMap = {
    '1001': 'Spa',
    '1002': 'Transportation',
    '1003': 'DiningReservations',
    '1004': 'EventTickets',
    // Add more services and their codes
  };

  const [serviceQuantities, setServiceQuantities] = useState({
    Spa: 0,
    Transportation: 0,
    DiningReservations: 0,
    EventTickets: 0,
    // Add initial states for more services
  });

  const [serviceCode, setServiceCode] = useState('');

  const handleServiceQuantityChange = (service, value) => {
    const newQuantity = value === '' ? 0 : parseInt(value, 10);
    setServiceQuantities(prevQuantities => ({
      ...prevQuantities,
      [service]: newQuantity
    }));
  };

  const handleServiceCodeChange = (e) => {
    setServiceCode(e.target.value);
  };

  const addServiceByCode = () => {
    const service = serviceCodeMap[serviceCode];
    if (service && serviceQuantities[service] !== undefined) {
      setServiceQuantities(prevQuantities => ({
        ...prevQuantities,
        [service]: prevQuantities[service] + 1
      }));
      setServiceCode(''); // Clear the input field
    } else {
      // Handle invalid code
      alert("Invalid service code.");
    }
  };

  const handleConfirm = () => {
    console.log("Confirm actions for room", bookingRef);
    onClose(); 
  };

  return (
    <div className="popup-container">
      <div className="popup-backdrop" onClick={onClose}></div>
      <div className="booking-details-popup">
        <h2>Concierge - Room {bookingRef}</h2>

        <div className="service-code-container">
        <input 
          type="text" 
          placeholder="Enter Service Code" 
          value={serviceCode} 
          onChange={handleServiceCodeChange}
          className="service-code-input"
          maxLength="4"
          onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
        />

          <button 
            onClick={addServiceByCode}
            className="btn-confirm"
          >
            Add Service
          </button>
        </div>


        <label>Services</label>
        <div className="products-scrollbox">
          <div className="products-flexbox">
            {Object.entries(serviceQuantities).map(([service, quantity]) => (
              <div key={service} className="product-item">
                <div>{service}</div>
                <input 
                  type="number" 
                  min="0" 
                  className="product-quantity-input"
                  value={quantity.toString()}
                  onChange={e => handleServiceQuantityChange(service, e.target.value)}
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

export default ConciergePopup;
