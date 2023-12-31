'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RoomCard.css'; // Path to your CSS file

const RoomCard = ({ image, title, features, price, availableRooms }) => {

    const [roomQuantity, setRoomQuantity] = useState(0);

    const handleDecrease = () => {
        setRoomQuantity(prev => Math.max(0, prev - 1));
    };

    const handleIncrease = () => {
        setRoomQuantity(prev => Math.min(prev + 1, availableRooms));
    };

    const handleChange = (event) => {
        const value = Math.max(0, Math.min(parseInt(event.target.value, 10) || 0, availableRooms));
        setRoomQuantity(value);
    };

    return (
        <div className="room-card">
            <img src={image} alt={title} className="room-image" />
            <div className="room-content">
                <h3 className="room-title">{title}</h3>
                <ul className="room-features">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className="room-price">{price} per night</div>
                <div className="room-selection">
                <div className="room-input-container">
                <label>No. of rooms</label>
                    <div className="room-control">
                        <button type="button" onClick={handleDecrease}>-</button>
                        <input 
                            type="number" 
                            value={roomQuantity} 
                            onChange={handleChange} 
                            placeholder="Number of rooms" />
                        <button type="button" onClick={handleIncrease}>+</button>
                    </div>
                </div>
            </div>
            </div>
            <button className="btn-book">
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1v14m7-7H1" stroke="#fff" strokeWidth="2" fill="none" fillRule="evenodd"/>
    </svg>
</button>

        </div>

    );
};

RoomCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
};

export default RoomCard;
