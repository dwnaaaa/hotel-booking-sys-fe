'use client';

import React, { useState } from 'react';
import ServicesCard from '../ServicesCard';
import '../PopupGlobal.css';

const HousekeepingPopup = ({ bookingRef,roomType, onClose }) => {
  const roomTypeImages = [
    { type: 'Deluxe', url: 'images/rooms/twin.jpg' },
    { type: 'Suite', url: 'images/rooms/king.jpg' },
    // ... add other room types if needed
  ];

  const findImageForRoomType = (type) => {
    const image = roomTypeImages.find(room => room.type === type);
    return image ? image.url : 'images/rooms/twin.jpg';
  };

  const headerImageUrl = findImageForRoomType(roomType);

  const [selectedServices, setSelectedServices] = useState({});

  const handleCardSelect = (serviceName, quantity) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceName]: quantity
    }));
  };

  const services = [
    {
      id: "roomCleaning",
      name: "Room Cleaning",
      imageUrl: "images/housekeeping/cleaning.svg",
      code: "1001"
    },
    {
      id: "laundryServices",
      name: "Laundry Services",
      imageUrl: "images/housekeeping/laundry.svg",
      code: "1002" 
    },
    {
      id: "shoePolishing",
      name: "Shoe Polishing",
      imageUrl: "images/housekeeping/shoe.svg",
      code: "1003"
    },
    {
      id: "packingServices",
      name: "Packing Services",
      imageUrl: "images/housekeeping/pack.svg",
      code: "1004"
    }
  ];

  const barItems = [
    { id: "chips", name: "Chips", imageUrl: "images/bar/chips.webp", code: "2001" },
    { id: "nuts", name: "Nuts", imageUrl: "images/bar/nuts.webp", code: "2002" },
    { id: "chocolat", name: "Chocolate", imageUrl: "images/bar/chocolate.webp", code: "2003" },
    { id: "candy", name: "Candy", imageUrl: "images/bar/candy.webp", code: "2004" },
    { id: "cookies", name: "Cookies", imageUrl: "images/bar/cookies.webp", code: "2005" },
    { id: "driedFruit", name: "Dried Fruit", imageUrl: "images/bar/driedfruits.webp", code: "2006" },
    { id: "granolaBars", name: "Granola Bars", imageUrl: "images/bar/granola.webp", code: "2007" },
    { id: "crackers", name: "Crackers", imageUrl: "images/bar/crackers.webp", code: "2008" },
    { id: "popcorn", name: "Popcorn", imageUrl: "images/bar/popcorn.webp", code: "2009" },
    { id: "cereal", name: "Cereal", imageUrl: "images/bar/cereals.webp", code: "2010" }
  ];

  const allItems = [...services, ...barItems];

  const [serviceCode, setServiceCode] = useState('');
  
  const handleServiceCodeChange = (e) => {
    setServiceCode(e.target.value);
  };

  const addServiceByCode = () => {
    const service = allItems.find(item => item.code === serviceCode);
    if (service) {
      // Logic to add the service
      setServiceCode(''); // Clear the input field
  
      // Display a success message
      alert(`${service.name} added successfully.`);
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
      <div className="details-popup">
        <button className="btn-close-circle" onClick={onClose}>
          <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div className="popup-header-image" style={{ backgroundImage: `url(${headerImageUrl})` }}></div>

        <div className="overall-content">
        <h2>{bookingRef}</h2>
        <h4>{roomType}</h4>

        <hr></hr>

          <div className="booking-popup-content">

          <div className="service-code-container">
          <input 
            type="text" 
            placeholder="Code" 
            value={serviceCode} 
            onChange={handleServiceCodeChange}
            className="service-code-input"
            maxLength="4"
            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
          />

            <button 
              onClick={addServiceByCode}
              className="btn-action"
            >
              Add
            </button>
          </div>

          <h3>Services</h3>

          <div className="services-container">
          {services.map(service => (
            <ServicesCard
              key={service.id}
              service={service.name}
              image={service.imageUrl}
              code={service.code}
              onCardSelect={handleCardSelect}
            />
          ))}
        </div>

        <h3>Room's Bar</h3>
        <div className="services-container">
        {barItems.map(item => (
          <ServicesCard
            key={item.id}
            service={item.name}
            image={item.imageUrl}
            code={item.code}
            onCardSelect={handleCardSelect}
          />
        ))}
      </div>


          </div>
        </div>



        <div className="action-buttons">

          <a href="/checkout" className="btn-action">Confirm</a>
        </div>
        
      </div>
    </div>
  );
};

export default HousekeepingPopup;
