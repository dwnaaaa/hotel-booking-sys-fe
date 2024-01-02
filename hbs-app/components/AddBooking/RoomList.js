'use client';

import React from 'react';
import RoomCard from './RoomCard';

const RoomList = () => {
    const rooms = [
        {
            id: 1,
            image: 'images/rooms/twin.jpg',
            title: 'Deluxe',
            features: ['Twin Bed', 'Free Wi-Fi', 'Air Conditioning'],
            maxGuests: 2,
            price: '$120',
            availableRooms: 5
 
        }, {
            id: 2,
            image: 'images/rooms/deluxe twin.jpg',
            title: 'Grand',
            features: ['Deluxe Twin Bed', 'Free Wi-Fi', 'Air Conditioning'],
            maxGuests: 4,
            price: '$120',
            availableRooms: 5
 
        }, {
            id: 3,
            image: 'images/rooms/double deck.jpg',
            title: 'Suite',
            features: ['Double Deck Bed', 'Free Wi-Fi', 'Air Conditioning'],
            maxGuests: 8,
            price: '$120',
            availableRooms: 5
 
        }, {
            id: 4,
            image: 'images/rooms/king.jpg',
            title: 'Executive',
            features: ['King Bed', 'Free Wi-Fi', 'Air Conditioning'],
            maxGuests: 10,
            price: '$120',
            availableRooms: 5
 
        },
        // ... other room data
    ];

    return (
        <div className="room-list">
            {rooms.map(room => (
                <RoomCard key={room.id} {...room} />
            ))}
        </div>
    );
};

export default RoomList;
