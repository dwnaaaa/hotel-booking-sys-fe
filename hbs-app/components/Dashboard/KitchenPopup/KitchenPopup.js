'use client';

import React, { useState } from 'react';
import ServicesCard from '../ServicesCard';
import '../PopupGlobal.css';

const KitchenPopup = ({ bookingRef,roomType, onClose }) => {
  const roomTypeImages = [
    { type: 'Deluxe', url: 'images/rooms/twin.jpg' },
    { type: 'Suite', url: 'images/rooms/king.jpg' },
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
      id: "cateringSergices",
      name: "Catering Services",
      imageUrl: "images/kitchen/catering.svg",
      code: "3001"
    },
    {
      id: "personalChef",
      name: "Personal Chef",
      imageUrl: "images/kitchen/chef.svg",
      code: "3002" 
    },
    {
      id: "customizedMeal",
      name: "Custom Meal Plan",
      imageUrl: "images/kitchen/meal.svg",
      code: "3003"
    },
    {
      id: "culinaryExperience",
      name: "Interactive Culinary",
      imageUrl: "images/kitchen/culinary.svg",
      code: "3004"
    }
  ];

  const inHouseMeals = [
    { id: "breakfast", name: "Breakfast", imageUrl: "images/kitchen/meals/breakfast.webp", code: "4001" },
    { id: "lunch", name: "Lunch", imageUrl: "images/kitchen/meals/lunch.webp", code: "4002" },
    { id: "dinner", name: "Dinner", imageUrl: "images/kitchen/meals/dinner.webp", code: "4003" }
  ];
  
  const alcohols = [
    { id: "beers", name: "Beers", imageUrl: "images/kitchen/alcohol/beers.webp", code: "5001" },
    { id: "wines", name: "Wines", imageUrl: "images/kitchen/alcohol/wines.webp", code: "5002" },
    { id: "spirits", name: "Spirits", imageUrl: "images/kitchen/alcohol/spirits.webp", code: "5003" },
    { id: "cocktails", name: "Cocktails", imageUrl: "images/kitchen/alcohol/cocktails.webp", code: "5004" },
    { id: "liqueurs", name: "Liqueurs", imageUrl: "images/kitchen/alcohol/liqueurs.webp", code: "5005" }
  ];
  
  const foods = [
    { id: "appetizers", name: "Appetizers", imageUrl: "images/kitchen/food/appetizers.webp", code: "6001" },
    { id: "salads", name: "Salads", imageUrl: "images/kitchen/food/salads.webp", code: "6002" },
    { id: "soups", name: "Soups", imageUrl: "images/kitchen/food/soups.webp", code: "6003" },
    { id: "meatDishes", name: "Meat Dishes", imageUrl: "images/kitchen/food/meatDishes.webp", code: "6004" },
    { id: "seafood", name: "Seafood", imageUrl: "images/kitchen/food/seafood.webp", code: "6005" },
    { id: "vegetarian", name: "Vegetarian Options", imageUrl: "images/kitchen/food/vegetarian.webp", code: "6006" },
    { id: "sides", name: "Sides", imageUrl: "images/kitchen/food/sides.webp", code: "6007" },
    { id: "desserts", name: "Desserts", imageUrl: "images/kitchen/food/desserts.webp", code: "6008" },
    { id: "snacks", name: "Snacks", imageUrl: "images/kitchen/food/snacks.webp", code: "6009" }
  ];
  

  const beverages = [
    { id: "coffee", name: "Coffee", imageUrl: "images/kitchen/beverages/coffee.webp", code: "7001" },
    { id: "tea", name: "Tea", imageUrl: "images/kitchen/beverages/tea.webp", code: "7002" },
    { id: "juices", name: "Juices", imageUrl: "images/kitchen/beverages/juices.webp", code: "7003" },
    { id: "softDrinks", name: "Soft Drinks", imageUrl: "images/kitchen/beverages/softDrinks.webp", code: "7004" },
    { id: "water", name: "Water", imageUrl: "images/kitchen/beverages/water.webp", code: "7005" },
    { id: "energyDrinks", name: "Energy Drinks", imageUrl: "images/kitchen/beverages/energyDrinks.webp", code: "7006" },
    { id: "milk", name: "Milk", imageUrl: "images/kitchen/beverages/milk.webp", code: "7007" }
  ];
  
  
  const allItems = [...inHouseMeals, ...alcohols, ...foods, ...beverages];


  const [serviceCode, setServiceCode] = useState('');
  
  const handleServiceCodeChange = (e) => {
    setServiceCode(e.target.value);
  };

  const addServiceByCode = () => {
    const service = allItems.find(item => item.code === serviceCode);
    if (service) {
      setServiceCode('');
  
      alert(`${service.name} added successfully.`);
    } else {
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

        <h3>Kitchen Items</h3>
        <h5>In House Meals</h5>
        <div className="services-container">
        {inHouseMeals.map(item => (
          <ServicesCard
            key={item.id}
            service={item.name}
            image={item.imageUrl}
            code={item.code}
            onCardSelect={handleCardSelect}
          />
        ))}
      </div>

      <h5>Alcohol</h5>
        <div className="services-container">
        {alcohols.map(item => (
          <ServicesCard
            key={item.id}
            service={item.name}
            image={item.imageUrl}
            code={item.code}
            onCardSelect={handleCardSelect}
          />
        ))}
      </div>

      <h5>Foods</h5>
        <div className="services-container">
        {foods.map(item => (
          <ServicesCard
            key={item.id}
            service={item.name}
            image={item.imageUrl}
            code={item.code}
            onCardSelect={handleCardSelect}
          />
        ))}
      </div>

      <h5>Beverages</h5>
        <div className="services-container">
        {beverages.map(item => (
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

export default KitchenPopup;
