'use client';

import React, { useState, useEffect } from 'react';
import RoomCard from './RoomCard';
import './RoomList.css';
import PropTypes from 'prop-types';

const RoomList = ({onRoomSelect}) => {

    const [roomsDB, setRoomsDB] = useState([]);
    const [roomsCountDB, setRoomsCountDB] = useState([]);
    const [selectedRoomInfo, setSelectedRoomInfo] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/hbs/room-type/all')
            .then(response => response.json())
            .then(data => {
                setRoomsDB(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    useEffect(() => {
        const roomTypes = ['D', 'G', 'S', 'E'];

        const fetchRoomCounts = async () => {
            const roomDataPromises = roomTypes.map(type =>
                fetch(`http://localhost:8080/hbs/room/count-with-type/${type}`)
                    .then(response => response.json())
                    .then(count => ({ type, count }))
            );
        
            const roomDataArray = await Promise.all(roomDataPromises);
            setRoomsCountDB(roomDataArray);
        };

        fetchRoomCounts();
    }, []);
    

    const handleRoomSelect = (roomInfo) => {
        setSelectedRoomInfo({ ...roomInfo });
        onRoomSelect(roomInfo);
    };    

    const roomImages = [
        'images/rooms/twin.jpg',
        'images/rooms/deluxe twin.jpg',
        'images/rooms/double deck.jpg',
        'images/rooms/king.jpg',
    ];

    const rooms = roomsDB.map((roomData, index) => ({
        roomType: roomData.roomType,
        image: roomImages[index % roomImages.length], // Cycle through the images array
        roomTypeName: roomData.roomTypeName,
        maxGuests: roomData.maxGuests,
        price: roomData.price,
        availableRooms: (roomsCountDB.find(countData => countData.type === roomData.roomType) || {}).count || 0,
    }));

    return (
        <div className="room-list">
            {rooms.map(room => (
                <RoomCard 
                    key={room.roomType}
                    {...room}
                    onSelect={(roomInfo) => handleRoomSelect(roomInfo)}
                    isSelected={selectedRoomInfo && selectedRoomInfo.roomType === room.roomType}
                    isAnyRoomSelected={selectedRoomInfo !== null}
                />
            ))}
        </div>
    );
};

RoomList.propTypes = {
    onRoomSelect: PropTypes.func.isRequired,
};

export default RoomList;
