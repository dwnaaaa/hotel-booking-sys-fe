'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RoomCard.css';

const RoomCard = ({ roomType, image, roomTypeName, maxGuests, price, availableRooms, guestCount, onSelect, isSelected, isAnyRoomSelected }) => {
    const isCardDisabled = availableRooms === 0 || isAnyRoomSelected || maxGuests < guestCount;

    const GuestIcon = () => (
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="2.5" stroke="#222222" stroke-linecap="round"/>
    <path d="M13.7679 6.5C13.9657 6.15743 14.2607 5.88121 14.6154 5.70625C14.9702 5.5313 15.3689 5.46548 15.7611 5.51711C16.1532 5.56874 16.5213 5.73551 16.8187 5.99632C17.1161 6.25713 17.3295 6.60028 17.4319 6.98236C17.5342 7.36445 17.521 7.76831 17.3939 8.14288C17.2667 8.51745 17.0313 8.8459 16.7175 9.08671C16.4037 9.32751 16.0255 9.46985 15.6308 9.49572C15.2361 9.52159 14.8426 9.42983 14.5 9.23205" stroke="#222222"/>
    <path d="M10.2321 6.5C10.0343 6.15743 9.73935 5.88121 9.38458 5.70625C9.02981 5.5313 8.63113 5.46548 8.23895 5.51711C7.84677 5.56874 7.47871 5.73551 7.18131 5.99632C6.88391 6.25713 6.67053 6.60028 6.56815 6.98236C6.46577 7.36445 6.47899 7.76831 6.60614 8.14288C6.73329 8.51745 6.96866 8.8459 7.28248 9.08671C7.5963 9.32751 7.97448 9.46985 8.36919 9.49572C8.76391 9.52159 9.15743 9.42983 9.5 9.23205" stroke="#222222"/>
    <path d="M12 12.5C16.0802 12.5 17.1335 15.8022 17.4054 17.507C17.4924 18.0524 17.0523 18.5 16.5 18.5H7.5C6.94771 18.5 6.50763 18.0524 6.59461 17.507C6.86649 15.8022 7.91976 12.5 12 12.5Z" stroke="#222222" stroke-linecap="round"/>
    <path d="M19.2965 15.4162L18.8115 15.5377L19.2965 15.4162ZM13.0871 12.5859L12.7179 12.2488L12.0974 12.9283L13.0051 13.0791L13.0871 12.5859ZM17.1813 16.5L16.701 16.639L16.8055 17H17.1813V16.5ZM15.5 12C16.5277 12 17.2495 12.5027 17.7783 13.2069C18.3177 13.9253 18.6344 14.8306 18.8115 15.5377L19.7816 15.2948C19.5904 14.5315 19.2329 13.4787 18.578 12.6065C17.9126 11.7203 16.9202 11 15.5 11V12ZM13.4563 12.923C13.9567 12.375 14.6107 12 15.5 12V11C14.2828 11 13.3736 11.5306 12.7179 12.2488L13.4563 12.923ZM13.0051 13.0791C15.3056 13.4614 16.279 15.1801 16.701 16.639L17.6616 16.361C17.1905 14.7326 16.019 12.5663 13.1691 12.0927L13.0051 13.0791ZM18.395 16H17.1813V17H18.395V16ZM18.8115 15.5377C18.8653 15.7526 18.7075 16 18.395 16V17C19.2657 17 20.0152 16.2277 19.7816 15.2948L18.8115 15.5377Z" fill="#222222"/>
    <path d="M10.9129 12.5859L10.9949 13.0791L11.9026 12.9283L11.2821 12.2488L10.9129 12.5859ZM4.70343 15.4162L5.18845 15.5377L4.70343 15.4162ZM6.81868 16.5V17H7.19453L7.29898 16.639L6.81868 16.5ZM8.49999 12C9.38931 12 10.0433 12.375 10.5436 12.923L11.2821 12.2488C10.6264 11.5306 9.71723 11 8.49999 11V12ZM5.18845 15.5377C5.36554 14.8306 5.68228 13.9253 6.22167 13.2069C6.75048 12.5027 7.47226 12 8.49999 12V11C7.0798 11 6.08743 11.7203 5.42199 12.6065C4.76713 13.4787 4.40955 14.5315 4.21841 15.2948L5.18845 15.5377ZM5.60498 16C5.29247 16 5.13465 15.7526 5.18845 15.5377L4.21841 15.2948C3.98477 16.2277 4.73424 17 5.60498 17V16ZM6.81868 16H5.60498V17H6.81868V16ZM7.29898 16.639C7.72104 15.1801 8.69435 13.4614 10.9949 13.0791L10.8309 12.0927C7.98101 12.5663 6.8095 14.7326 6.33838 16.361L7.29898 16.639Z" fill="#222222"/>
        </svg>
      );

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

    
    let cardClass = 'room-card';

    if (isSelected) {
        cardClass += ' selected';
    } else if (isAnyRoomSelected) {
        cardClass += ' not-selected';
    }


    return (
        <div className={cardClass}>
            <img src={image} alt={roomTypeName} className="room-image" />
            <div className="room-content">
                <h3 className="room-title">{roomTypeName}</h3>
                <div className="info-row">
                <div className="guest-capacity">
                <GuestIcon />
                <span>{maxGuests} guests</span>
                </div>
                </div>

                <div className="room-price">{price} per night</div>
                <div className="room-selection">
                <div className="room-input-container">
                <label>No. of rooms</label>
                <div className="room-control">
                    {/* <button type="button" onClick={handleDecrease} disabled={!isSelected}>-</button> */}
                    <button type="button" onClick={handleDecrease}>-</button>
                    <input 
                        type="number" 
                        value={roomQuantity} 
                        onChange={handleChange} 
                        placeholder="Number of rooms"
                        disabled={!isSelected || isCardDisabled}
                    />
                    {/* <button type="button" onClick={handleIncrease} disabled={!isSelected}>+</button> */}
                    <button type="button" onClick={handleIncrease}>+</button>
                </div>

                </div>
            </div>
            </div>
            {/* <button className="btn-book" onClick={() => onSelect(id)}> */}
            <button className="btn-book" onClick={() => onSelect({ roomType, roomTypeName, maxGuests, price, availableRooms, roomQuantity })} disabled={isCardDisabled}>
                Select
            </button>

        </div>

    );
};

RoomCard.propTypes = {
    image: PropTypes.string.isRequired,
    roomTypeName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,    
};

export default RoomCard;
