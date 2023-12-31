'use client';

import React from 'react';
import RoomCard from './RoomCard';

const RoomList = () => {
    const rooms = [
        {
            id: 1,
            image: 'images/rooms/twin.jpg',
            title: 'Twin Room',
            features: ['Twin Bed', 'Free Wi-Fi', 'Air Conditioning'],
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
