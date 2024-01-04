'use client';

import React, { useState } from 'react';
import RoomCard from './RoomCard';
import './RoomList.css';

const RoomList = () => {

    const [selectedRoomId, setSelectedRoomId] = useState(null);

    const handleRoomSelect = (roomId) => {
        if (selectedRoomId === roomId) {
            setSelectedRoomId(null);
        } else {
            setSelectedRoomId(roomId);
        }
    };


    const rooms = [
        {
            id: 1,
            image: 'images/rooms/twin.jpg',
            title: 'Deluxe',
            maxGuests: 2,
            price: '$120',
            availableRooms: 5
 
        }, {
            id: 2,
            image: 'images/rooms/deluxe twin.jpg',
            title: 'Grand',
            maxGuests: 4,
            price: '$120',
            availableRooms: 5
 
        }, {
            id: 3,
            image: 'images/rooms/double deck.jpg',
            title: 'Suite',
            maxGuests: 8,
            price: '$120',
            availableRooms: 5
 
        }, {
            id: 4,
            image: 'images/rooms/king.jpg',
            title: 'Executive',
            maxGuests: 10,
            price: '$120',
            availableRooms: 5
 
        },
        // ... other room data
    ];

    return (
        <div className="room-list">
            {rooms.map(room => (
                <RoomCard 
                    key={room.id} 
                    {...room} 
                    onSelect={handleRoomSelect} 
                    isSelected={selectedRoomId === room.id}
                    isAnyRoomSelected={selectedRoomId !== null}
                />
            ))}
        </div>
    );
};

export default RoomList;
