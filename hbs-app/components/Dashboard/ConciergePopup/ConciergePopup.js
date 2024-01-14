'use client';

import React, { useState } from 'react';
import ServicesCard from '../ServicesCard';
import '../PopupGlobal.css';

const ConciergePopup = ({ bookingRef,roomType, onClose }) => {
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
      id: "reservations",
      name: "Reservations",
      imageUrl: "images/concierge/reservations.svg",
      code: "8001"
    },
    {
      id: "eventPlanning",
      name: "Event Planning",
      imageUrl: "images/concierge/event.svg",
      code: "8002"
    },
    {
      id: "languageAssistance",
      name: "Language Assist",
      imageUrl: "images/concierge/language.svg",
      code: "8003"
    },
    {
      id: "shoppingAssistance",
      name: "Shopping Assist",
      imageUrl: "images/concierge/shopping.svg",
      code: "8004"
    },
    {
      id: "spaAndWellness",
      name: "Spa and Wellness",
      imageUrl: "images/concierge/spa.svg",
      code: "8005"
    }
  ];
  

  const transportationServices = [
    {
      id: "motorcycle",
      name: "Motorcycle",
      imageUrl: "images/concierge/motorcycle.svg",
      code: "9001"
    },
    {
      id: "fourSeaterCar",
      name: "4-Seater Car",
      imageUrl: "images/concierge/4seater.svg",
      code: "9002"
    },
    {
      id: "sixSeaterCar",
      name: "6-Seater Car",
      imageUrl: "images/concierge/6seater.svg",
      code: "9003"
    }
  ];
  

  const allItems = [...services, ...transportationServices];

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
  
  const addService = async () => {
    try {
      const response = await fetch('http://localhost:8080/hbs/brn-service/add-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brn: brn_Services.brn,
          serviceCode: brn_Services.serviceCode,
          roomNumber: brn_Services.roomNumber, 
          quantity: brn_Services.quantity,  
        }),
      });

      if (response.ok) {
        // Service added successfully
        alert('Service added successfully.');
      } else {
        // Handle error
        alert('Failed to add service.');
      }
    } catch (error) {
      console.error('Error adding service:', error);
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
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2"
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

        <h5>Transportation Services</h5>
        <div className="services-container">
        {transportationServices.map(item => (
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

export default ConciergePopup;
